/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-04-04 15:00:09
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
interface Tags {
  latest?: string
  all: string[]
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
  private _logger: any
  private _env?: string
  private _path?: string
  private _folders: QuickPickItem[] = []
  private _tags: Tags = { all: [], latest: '' }

  // #region 构造函数
  constructor() {
    this._disposable = commands.registerCommand(Commands.tag, async (...args) => {
      window.withProgress(
        {
          location: ProgressLocation.Notification,
          title: '创建Tag',
          cancellable: true,
        },
        async (progress, token) => {
          token.onCancellationRequested(() => {
            log.error('🏷 取消创建')
          })

          this._logger = async (text: string) => {
            progress.report({ message: text })
            log.info(text)
          }
          this._logger('register command')

          try {
            await this.quickPickPath()
            await this.quickPickEnv()

            // tslint:disable-next-line: no-unused-expression
            this._env && (await this.addTagByTags(this._env))

            this._logger(`env: ${this._env}`)
            this._logger(`path: ${this._path}`)
          } catch (err) {
            log.error(err.message || err)
          }
        },
      )
    })
  }
  // #endregion

  // #region simple git
  git(command: string, ...config: any) {
    let that = this
    return new Promise((resolve, reject) => {
      simplegit(this._path || process.cwd())[command](...config, function(error: any, result: any) {
        that._logger(`> git ${command} ${JSON.stringify(config)}`)
        that._logger(result || error)
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
    this._logger('开始获取目录列表')
    this._folders = getWorkspaceFolders()

    if (this._folders.length > 0) {
      if (this._folders.length === 1) {
        this._path = this._folders[0].path
      } else {
        this._logger('选择目录...')
        let commandFolder = await showQuickPick(this._folders)
        this._logger(`选择的目录: ${JSON.stringify(commandFolder)}`)
        if (commandFolder) {
          this._path = commandFolder.path
          return commandFolder
        } else {
          // this._logger('获取目录信息失败，正在重试...')
          // await this.quickPickPath()
          throw new Error('Sorry！获取目录信息失败，请重试...')
        }
      }
    }
  }
  // #endregion

  // #region 选择环境
  /**
   * quickPickEnv
   * @memberof Tag
   */
  async quickPickEnv() {
    this._logger('选择环境...')
    let commandEnv: QuickPickItem = await showQuickPick(COMMAND_DEFINITIONS)
    this._logger(`选择的环境: ${JSON.stringify(commandEnv)}`)
    if (commandEnv) {
      this._env = commandEnv.label
      return commandEnv
    } else {
      // this._logger('Sorry！获取环境信息失败，正在重试...')
      // await this.quickPickEnv()
      throw new Error('Sorry！获取环境信息失败，请重试...')
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
    // await this.git('listRemote')
    // await this.git('log')

    await this.commitAllFiles()
    await this.pull()

    return env === 'all'
      ? await Promise.all(
          COMMAND_DEFINITIONS.map(item =>
            item.versionName ? this.addTagPre(item.label) : Promise.resolve(),
          ),
        )
      : [await this.addTagPre(env)]
  }
  // #endregion

  // #region commit 提交所有未提交的文件
  /**
   * commit 提交所有未提交的文件
   * @memberof Tag
   */
  async commitAllFiles() {
    this._logger('检查是否有未提交的变更')
    let statusSummary: any = await this.git('status')
    if (statusSummary.files.length) {
      window.showWarningMessage('🚨 发现未提交的文件变更已提交')
      this._logger('🚨 发现未提交的文件变更已提交')
      await this.git('add', './*')
      await this.git('commit', '🚀  🔖')
      let branchSummary: any = await this.git('branch')
      this._logger('处理未提交的文件变更...')
      return await this.git('push', 'origin', branchSummary.current)
    }
    return Promise.resolve()
  }
  // #endregion

  // #region 拉取更新
  /**
   * 拉取更新
   *
   * @returns
   * @memberof Tag
   */
  async pull() {
    this._logger('开始拉取最新的变更')
    return await this.git('pull', { '--rebase': 'true' })
  }
  // #endregion

  // #region 获取tag list
  /**
   * 获取tag list
   *
   * @returns
   * @memberof Tag
   */
  async getTags() {
    this._logger('开始获取所有tag')

    // const tags: Tags = fs.readdirSync(`${this._path}/.git/refs/tags`) || [] // 从本地文件读取tag
    const tags: any = await this.git('tags')
    this._tags = tags

    this._logger(`> git tags`)
    this._logger(JSON.stringify(tags))

    return tags
  }
  // #endregion

  // #region 添加标签预处理
  /**
   * 添加标签预处理
   * @param {string} envName
   * @memberof Tag
   */
  async addTagPre(envName: string) {
    this._logger('处理标签...')

    // 当前环境的最大版本号
    let lastVsersion = '0.0.0'
    let tagReg = /^(\w+)-v((\d+\.?)+)-(\d{8})$/gi

    // 当前环境的版本号列表过滤
    let versions = this._tags.all.filter((item: any) => {
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
            this._logger(`格式化版本号: ${matchStr}`)
            let tagVersion =
              semver.valid(semver.coerce(arg[2].replace(/\.0+(\d|0\.)/g, '.$1')) || '') ||
              lastVsersion

            // 比较版本号，记录最大版本号
            this._logger(`比较版本号: ${tagVersion} & ${lastVsersion}`)
            lastVsersion = semver.gt(tagVersion, lastVsersion) ? tagVersion : lastVsersion
            return matchStr
          })
        : false
    })
    window.showInformationMessage(`🏷 当前环境的版本号列表:\r\n ${versions.join(`  /  `)}`)

    let version = await this.generateNewTag(envName, lastVsersion)
    this._logger(`生成新版本号: ${JSON.stringify(version)}`)

    await this.addTag(version)
  }
  // #endregion

  // #region 添加Tag
  /**
   * 添加Tag
   * @param {Array<Version>} versions
   * @memberof Tag
   */
  async addTag(version: Version) {
    this._logger(`添加标签 ${version.tag || ''}`)
    await this.git('addTag', version.tag)
    window.showInformationMessage(`🔖 添加新Tag: ${version.tag}`, version.tag || '')
    await this.git('pushTags', 'origin')
    return version
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
        this._logger(`生成标签 ${env} ${version}`)
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
        this._logger(`标签生成 ${config}`)
        resolve(config)
      } catch (error) {
        log.error(error.message || error)
        reject(error)
      }
    })
  }
  // #endregion
}
