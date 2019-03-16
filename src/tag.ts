/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-03-16 13:20:11
 */

import { commands, Disposable, window } from 'vscode'
import { Commands, command, showQuickPick, QuickPickItem, getWorkspaceFolders } from './common'

const simpleGit = require('simple-git/promise')
const semver = require('semver')
const dayjs = require('dayjs')

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
    label: 'dev',
    description: 'QA测试环境',
    versionName: 'version_dev',
  },
  {
    label: 'all',
    description: '所有环境',
  },
]
// #endregion

@command()
export class Tag {
  private _disposable: Disposable
  private _env?: string
  private _path?: string
  private _folders: QuickPickItem[] = []
  private _git?: any

  get git(): any {
    if (!this._git) {
      this._git = simpleGit(this._path || process.cwd())
    }
    return this._git
  }

  constructor() {
    this._disposable = commands.registerCommand(Commands.tag, async (...args) => {
      console.log('TCL: Tag -> constructor -> args', args)
      try {
        await this.quickPickPath()
        await this.quickPickEnv()

        // tslint:disable-next-line: no-unused-expression
        this._env && (await this.addTagByTags(this._env))

        console.log('TCL: Tag -> constructor -> path & env', this._path, this._env)
      } catch (err) {
        window.showErrorMessage(err.message)
      }
    })
  }

  // #region 选择目录
  /**
   * 选择目录
   * @memberof Tag
   */
  async quickPickPath() {
    this._folders = getWorkspaceFolders()

    if (this._folders.length > 0) {
      if (this._folders.length === 1) {
        this._path = this._folders[0].path
      } else {
        let commandFolder = await showQuickPick(this._folders)
        console.log('TCL: Tag -> quickPickPath -> 选择的目录', commandFolder)
        this._path = commandFolder.path
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
    let commandEnv: QuickPickItem = await showQuickPick(COMMAND_DEFINITIONS)
    console.log('TCL: Tag -> quickPickEnv -> 选择的环境', commandEnv)
    this._env = commandEnv.label
  }
  // #endregion

  // #region 根据Tag列表添加Tag
  /**
   * 根据Tag列表添加Tag
   * @param {string} env master|pre|dev|all
   * @memberof Tag
   */
  async addTagByTags(env: string) {
    // const tags = fs.readdirSync('./.git/refs/tags'); // 同步版本的readdir
    await this.commitAllFiles()
    await this.git.pull({ '--rebase': 'true' })
    const tags = await this.git.tags()

    let addTagSingle = async (envName: string) => {
      // 当前环境的最大版本号
      let lastVsersion = '0.0.0'
      // 当前环境的版本号列表过滤
      let versions = tags.all.filter(
        (item: any) =>
          !!item.replace(/^(dev.*|qa|pre|master)-v((\d+\.?)+)-(\d{8})$/gi, (...arg: any) => {
            let matchStr = arg[0] || ''
            let tagEnv = arg[1] || ''

            // 因为新老QA的tag前缀不同，为了兼容则根据已经创建的tag前缀来创建，默认QA的tag前缀是dev
            if (envName === 'dev' && /dev.*|qa/.test(tagEnv)) {
              envName = tagEnv
            }
            if (tagEnv !== envName) {
              return ''
            }

            // 格式化版本号，将诸如 0.0.01.001 中多余的 0 去掉
            let tagVersion =
              semver.valid(semver.coerce(arg[2].replace(/\.0+(\d|0\.)/g, '.$1'))) || lastVsersion

            // 比较版本号，记录最大版本号
            lastVsersion = semver.gt(tagVersion, lastVsersion) ? tagVersion : lastVsersion
            return matchStr
          }),
      )
      console.log('TCL: Tag -> addTagSingle -> versions', versions)
      window.showInformationMessage(
        `🏷 当前环境的版本号列表:\n\t${versions.join('\n\t')}`,
        ...versions,
      )
      let version = await this.generateNewTag(envName, lastVsersion)
      await this.addTag([version])
    }

    return env === 'all'
      ? await Promise.all(
          COMMAND_DEFINITIONS.map(item =>
            item.versionName ? addTagSingle(item.label) : Promise.resolve(),
          ),
        )
      : [await addTagSingle(env)]
  }
  // #endregion

  // #region commit 提交所有未提交的文件
  /**
   * commit 提交所有未提交的文件
   * @memberof Tag
   */
  async commitAllFiles() {
    let statusSummary = await this.git.status()
    if (statusSummary.files.length) {
      await this.git.add('./*')
      await this.git.commit('🚀🔖')
      window.showWarningMessage('🚨 有未提交的文件变更已提交')
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
    await this.git.pull({ '--rebase': 'true' })

    versions.forEach(async (version: Version) => {
      await this.git.addTag(version.tag)
      window.showInformationMessage(`🔖 添加新Tag: ${version.tag}`, version.tag || '')
    })
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
    return new Promise(resolve => {
      // const major = semver.major(version)
      const minor = semver.minor(version)
      const patch = semver.patch(version)
      const date = dayjs().format('YYYYMMDD')
      const config = { env, version, tag: `${env}-v${version}-${date}` }
      if (patch >= 99) {
        config.version = semver.inc(version, 'minor')
      } else if (minor >= 99) {
        config.version = semver.inc(version, 'major')
      } else {
        config.version = semver.inc(version, 'patch')
      }
      config.tag = `${env}-v${config.version}-${date}`
      resolve(config)
    })
  }
  // #endregion
}
