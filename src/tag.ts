/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-04-04 12:15:49
 */

import { commands, Disposable, window, ProgressLocation } from 'vscode'
import { Commands, command, showQuickPick, QuickPickItem, getWorkspaceFolders } from './common'

import * as fs from 'fs'
import * as semver from 'semver'
import * as dayjs from 'dayjs'
import Logger from './log'

const simplegit = require('simple-git')

// const _Logger: typeof Logger = require('./log') // 懒加载Logger模块
const log = new Logger()

// #region 接口声明
export interface Version {
  env?: string // 环境
  tag?: string // 标签
  version?: string // 版本号
}
// #endregion

// #region 环境列表选项
export const COMMAND_DEFINITIONS: QuickPickItem[] = [
  {
    label: 'master',
    description: '线上环境',
    versionName: 'version',
  },
  {
    label: 'pre',
    description: '预上线环境',
    versionName: 'version_pre',
  },
  {
    label: 'qa',
    description: 'QA测试环境',
    versionName: 'version_qa',
  },
  {
    label: 'all',
    description: '所有环境',
  },
]
// #endregion

// const execa = require('execa')
// const git = async (cmd, opts) => {
//   const cmdList = Array.isArray(cmd) ? cmd : cmd.split(' ')
//   const { stdout } = await execa('git', cmdList, opts)
//   return stdout
// }

@command()
export class Tag {
  private _disposable: Disposable
  private _env?: string
  private _path?: string
  private _folders: QuickPickItem[] = []

  // #region 构造函数
  constructor() {
    this._disposable = commands.registerCommand(Commands.tag, async (...args) => {
      log.info('register command')
      try {
        await this.quickPickPath()
        await this.quickPickEnv()

        // tslint:disable-next-line: no-unused-expression
        this._env && (await this.addTagByTags(this._env))

        log.info(`env: ${this._env}`)
        log.info(`path: ${this._path}`)
      } catch (err) {
        log.error(err.message || err)
        window.showErrorMessage(err.message || err)
      }
    })
  }
  // #endregion

  // #region simple git
  git(command: string, ...config: any) {
    return new Promise((resolve, reject) => {
      simplegit(this._path || process.cwd())[command](...config, function(error: any, result: any) {
        log.info(`> git ${command} ${JSON.stringify(config)}`)
        log.info(result || error)
        return error ? reject(error) : resolve(result)
      })
    })
  }
  // #endregion

  // #region 选择目录
  /**
   * 选择目录
   * @memberof Tag
   */
  async quickPickPath() {
    try {
      this._folders = getWorkspaceFolders()

      if (this._folders.length > 0) {
        if (this._folders.length === 1) {
          this._path = this._folders[0].path
        } else {
          let commandFolder = await showQuickPick(this._folders)
          log.info(`选择的目录: ${JSON.stringify(commandFolder)}`)
          if (commandFolder) {
            this._path = commandFolder.path
          }
          window.showInformationMessage('获取目录信息失败，正在重试...')
          log.info('获取目录信息失败，正在重试...')
          await this.quickPickPath()
        }
      }
    } catch (error) {
      log.error(error.message || error)
    }
  }
  // #endregion

  // #region 选择环境
  /**
   * quickPickEnv
   * @memberof Tag
   */
  async quickPickEnv() {
    try {
      let commandEnv: QuickPickItem = await showQuickPick(COMMAND_DEFINITIONS)
      log.info(`选择的环境: ${JSON.stringify(commandEnv)}`)
      if (commandEnv) {
        this._env = commandEnv.label
      }
      window.showInformationMessage('获取环境信息失败，正在重试...')
      log.info('获取环境信息失败，正在重试...')
      await this.quickPickEnv()
    } catch (error) {
      log.error(error.message || error)
    }
  }
  // #endregion

  // #region 根据Tag列表添加Tag
  /**
   * 根据Tag列表添加Tag
   * @param {string} env master|pre|qa|all
   * @memberof Tag
   */
  async addTagByTags(env: string) {
    window.withProgress(
      {
        location: ProgressLocation.Notification,
        title: '创建Tag',
        cancellable: true,
      },
      async (progress, token) => {
        const logger = async (text: string) => {
          progress.report({ message: text })
          log.info(text)
        }

        try {
          token.onCancellationRequested(() => window.showInformationMessage(`🏷 取消创建`))

          // await this.git('listRemote')
          // await this.git('log')

          // #region 获取tag列表
          logger('开始检查是否有未提交的变更')
          await this.commitAllFiles()

          logger('开始拉取最新的变更')
          await this.git('pull', { '--rebase': 'true' })

          logger('开始获取所有tag')
          interface Tags {
            latest?: string
            all?: string[]
          }
          // const tags: Tags = fs.readdirSync(`${this._path}/.git/refs/tags`) || [] // 从本地文件读取tag
          const tags: Tags = await this.git('tags')
          logger(`> git tags`)
          logger(JSON.stringify(tags))
          // #endregion

          // #region addTagSingle
          let addTagSingle = async (envName: string) => {
            // 当前环境的最大版本号
            let lastVsersion = '0.0.0'
            let tagReg = /^(\w+)-v((\d+\.?)+)-(\d{8})$/gi

            // 当前环境的版本号列表过滤
            let versions = tags.all
              ? tags.all.filter((item: any) => {
                  return tagReg.test(item)
                    ? item.replace(tagReg, (...arg: any) => {
                        let matchStr = arg[0] || ''
                        let tagEnv = arg[1] || ''

                        // 因为新老QA的tag前缀不同，为了兼容则根据已经创建的tag前缀来创建，默认QA的tag前缀是qa
                        if (envName === 'qa' && /dev.*|qa/.test(tagEnv)) {
                          envName = tagEnv
                        }
                        if (tagEnv !== envName) {
                          return ''
                        }

                        // 格式化版本号，将诸如 0.0.01.001 中多余的 0 去掉
                        logger(`格式化版本号: ${matchStr}`)
                        let tagVersion =
                          semver.valid(
                            semver.coerce(arg[2].replace(/\.0+(\d|0\.)/g, '.$1')) || '',
                          ) || lastVsersion

                        // 比较版本号，记录最大版本号
                        logger(`比较版本号: ${tagVersion} & ${lastVsersion}`)
                        lastVsersion = semver.gt(tagVersion, lastVsersion)
                          ? tagVersion
                          : lastVsersion
                        return matchStr
                      })
                    : false
                })
              : []
            window.showInformationMessage(`🏷 当前环境的版本号列表:\r\n ${versions.join(`  /  `)}`)

            let version = await this.generateNewTag(envName, lastVsersion)
            logger(`生成新版本号: ${JSON.stringify(version)}`)

            await this.addTag([version])
          }
          // #endregion

          return env === 'all'
            ? await Promise.all(
                COMMAND_DEFINITIONS.map(item =>
                  item.versionName ? addTagSingle(item.label) : Promise.resolve(),
                ),
              )
            : [await addTagSingle(env)]
        } catch (error) {
          log.error(error.message || error)
        }
      },
    )
  }
  // #endregion

  // #region commit 提交所有未提交的文件
  /**
   * commit 提交所有未提交的文件
   * @memberof Tag
   */
  async commitAllFiles() {
    try {
      let statusSummary: any = await this.git('status')
      if (statusSummary.files.length) {
        window.showWarningMessage('🚨 有未提交的文件变更已提交')
        await this.git('add', './*')
        await this.git('commit', '🚀  🔖')
        let branchSummary: any = await this.git('branch')
        await this.git('push', 'origin', branchSummary.current)
      }
    } catch (error) {
      log.error(error.message || error)
    }
  }
  // #endregion

  // #region 添加Tag
  /**
   * 添加Tag
   * @param {Array<Version>} versions
   * @memberof Tag
   */
  async addTag(versions: Array<Version>) {
    try {
      await this.git('pull', { '--rebase': 'true' })

      versions.forEach(async (version: Version) => {
        await this.git('addTag', version.tag)
        window.showInformationMessage(`🔖 添加新Tag: ${version.tag}`, version.tag || '')
        await this.git('pushTags', 'origin')
      })
    } catch (error) {
      log.error(error.message || error)
    }
  }
  // #endregion

  // #region 生成新Tag
  /**
   * 生成新Tag
   * @param {string} [env='pre']  master|pre|dev|all
   * @param {string} [version='0.0.0'] 前一个版本号
   * @returns [version='0.0.1'] 新版本号
   * @memberof Tag
   */
  generateNewTag(env: string = 'pre', version: string = '0.0.0') {
    return new Promise((resolve, reject) => {
      try {
        // const major = semver.major(version)
        const minor = semver.minor(version)
        const patch = semver.patch(version)
        const date = dayjs().format('YYYYMMDD')
        const config = { env, version, tag: `${env}-v${version}-${date}` }
        if (patch >= 99) {
          config.version = semver.inc(version, 'minor') || '0.0.0'
        } else if (minor >= 99) {
          config.version = semver.inc(version, 'major') || '0.0.0'
        } else {
          config.version = semver.inc(version, 'patch') || '0.0.0'
        }
        config.tag = `${env}-v${config.version}-${date}`
        resolve(config)
      } catch (error) {
        log.error(error.message || error)
        reject(error)
      }
    })
  }
  // #endregion
}
