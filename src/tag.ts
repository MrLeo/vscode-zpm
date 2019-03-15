/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-03-15 14:32:44
 */

import { commands, Disposable, workspace, window, WorkspaceFolder } from 'vscode'
import { command } from './common'

const simpleGit = require('simple-git/promise')

// #region 接口声明
export interface Version {
  env?: string // 环境
  tag?: string // 标签
  version?: string // 版本号
}
export interface QuickPickItem {
  label: string // 命令
  description?: string // 命令描述
  path?: string // 工程路径
  versionName?: string // 配置不同环境的version属性名
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

// #region 显示选框
/**
 * 显示选框
 * @param {QuickPickItem[]} QuickPickList
 * @returns
 */
async function showQuickPick(QuickPickList: QuickPickItem[]) {
  return new Promise<QuickPickItem>((resolve, reject) => {
    try {
      window.showQuickPick(QuickPickList).then(command => {
        console.log('TCL: Tag -> constructor -> command', command)
        resolve(command)
      })
    } catch (err) {
      console.log('TCL: catch -> err', err)
      reject(err)
    }
  })
}
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

  constructor(command: string) {
    this._disposable = commands.registerCommand(command, async (...args) => {
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

  // #region 获取目录列表
  /**
   * 获取目录列表
   * @memberof Tag
   */
  getWorkspaceFolders() {
    const workspaceFolders: WorkspaceFolder[] = workspace.workspaceFolders || []
    console.log('TCL: Tag -> getWorkspaceFolders -> workspaceFolders', workspaceFolders)
    console.log('TCL: Tag -> getWorkspaceFolders -> vscode.workspace.rootPath', workspace.rootPath)
    this._folders = workspaceFolders.map(folder => {
      return {
        label: folder.name,
        path: folder.uri.path,
      }
    })
  }
  // #endregion

  // #region 选择目录
  /**
   * 选择目录
   * @memberof Tag
   */
  async quickPickPath() {
    this.getWorkspaceFolders()

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
    console.log('TCL: Tag -> constructor -> 选择的环境', commandEnv)
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
      const reg = new RegExp(`^${envName}`)
      let envTags = tags.all.filter((tag: string) => reg.test(tag))
      let lastTag = envTags[envTags.length - 1] || `${envName}-v0.0.0-19000101`
      // log(chalk`{gray 🏷  仓库最新的Tag: ${lastTag}}`)
      let lastVsersion = lastTag.split('-')[1].substring(1)
      let version = await this.generateNewTag(envName, lastVsersion)
      // log(chalk`{gray 🏷  生成最新的Tag: ${version.tag}}`)
      await this.createTag([version])
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

  // #region commit 所有未提交的文件
  /**
   * commit 所有未提交的文件
   * @memberof Tag
   */
  async commitAllFiles() {
    let statusSummary = await this.git.status()
    if (statusSummary.files.length) {
      // log(chalk`{red 🚨  有未提交的文件变更}`)
      // log(chalk`{gray ➕  暂存未提交的文件变更}`)
      await this.git.add('./*')
      // log(chalk`{gray ✔️  提交未提交的文件变更}`)
      await this.git.commit('🚀')
    }
  }
  // #endregion

  // #region 创建Tag
  /**
   * 创建Tag
   * @param {Array<Version>} versions
   * @memberof Tag
   */
  async createTag(versions: Array<Version>) {
    // log(chalk`{green 🔀  更新本地仓库}`)
    await this.git.pull({ '--rebase': 'true' })

    versions.forEach(async (version: Version) => {
      // log(chalk`{green 🏷  创建标签 ${version.tag}}`)
      await this.git.addTag(version.tag)
    })
  }
  // #endregion

  // #region 生成新Tag
  /**
   * 生成新Tag
   * @param {string} [env='pre']  master|pre|dev|all
   * @param {string} [version='0.0.0']
   * @returns
   * @memberof Tag
   */
  generateNewTag(env: string = 'pre', version: string = '0.0.0') {
    return new Promise(resolve => {
      const semver = require('semver')
      // const major = semver.major(version)
      const minor = semver.minor(version)
      const patch = semver.patch(version)
      const date = formatTime(new Date(), '{y}{m}{d}')
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

      // const Bump = require('bump-regex') // 为git的version添加自动增长版本号组件
      // Bump(`version:${version}`, (err, out) => {
      //   if (out) {
      //     const date = formatTime(new Date(), '{y}{m}{d}')
      //     resolve({
      //       env,
      //       version: out.new,
      //       tag: `${env}-v${out.new}-${date}`
      //     })
      //   } else {
      //     reject(err)
      //   }
      // })
    })
  }
  // #endregion
}

// #region 格式化时间
/**
 * 格式化时间
 *
 * @param  {time} 时间
 * @param  {cFormat} 格式
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 */
function formatTime(time: string | number | Date, cFormat: string): string {
  if (arguments.length === 0) {
    return ''
  }
  if (`${time}`.length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }

  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return value || 0
  })
  return time_str
}
// #endregion
