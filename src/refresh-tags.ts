/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-08-02 17:43:09
 */

import { commands, Disposable, ExtensionContext, ProgressLocation, window } from 'vscode'
import {
  command, Commands, getWorkspaceFolders, QuickPickItem, showQuickPick, sleep
} from './common'
import Logger from './log'


const simplegit = require('simple-git')

// const _Logger: typeof Logger = require('./log') // 懒加载Logger模块
const log = new Logger()

// #region 接口声明
interface Tags {
  latest?: string
  all: string[]
}
// #endregion

// const execa = require('execa')
// const git = async (cmd, opts) => {
//   const cmdList = Array.isArray(cmd) ? cmd : cmd.split(' ')
//   const { stdout } = await execa('git', cmdList, opts)
//   return stdout
// }

@command()
export class TagRefresh {
  private _disposable: Disposable
  private _logger: any
  private _path?: string
  private _folders: QuickPickItem[] = []
  private _tags: Tags = { all: [], latest: '' }

  // #region 构造函数
  constructor(context?:ExtensionContext) {
    this._disposable = commands.registerCommand(Commands.tagRefresh, async (...args) => {
      window.withProgress(
        {
          location: ProgressLocation.Notification,
          title: '刷新Tag',
          cancellable: true,
        },
        async (progress, token) => {
          token.onCancellationRequested(() => log.error('🏷 取消刷新') )

          this._logger = async (text: string) => {
            progress.report({ message: text })
            log.info(text)
          }
          this._logger(`register command ${Commands.tagRefresh}`)

          try {
            await this.quickPickPath()
            if (this._folders.length === 0) {
              await sleep(1000)
              await this.quickPickPath()
            }
            this._logger(`path: ${this._path}`)

            this._logger('开始获取所有tag')
            const [localTags, remoteTags]:any = await Promise.all([
              this.git('tags'), // 本地Tag
              this.git('listRemote', ['--heads', '--tags']) // 远端Tag
            ])
            for(let i = 0; i < localTags.all.length; i++){
              let localTag = localTags.all[i]
              const reg = new RegExp(`/${localTags.all[i].replace(/([\.|\+])/ig,'\\$1')}\n`,'i')
              if(!reg.test(remoteTags)) this.git('tag', ['-d', localTag]) // 删除远端不存在的Tag
            }
          } catch (err: any) {
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

}
