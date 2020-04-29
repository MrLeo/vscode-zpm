import { workspace,commands, Disposable, window, ProgressLocation, ExtensionContext } from "vscode"
import { command, Commands, getWorkspaceFolders, showQuickPick, sleep, QuickPickItem } from "./common"
import Logger from './log'
import { getTemplateCode } from "./getTemplateCode"

// const _Logger: typeof Logger = require('./log') // 懒加载Logger模块
const log = new Logger()

const rootPath = workspace.rootPath

@command()
export class CreateNodeApi {
  private _disposable: Disposable
  private _logger: any
  private _path?: string
  private _folders: QuickPickItem[] = []

  // #region 构造函数
  constructor(context:ExtensionContext) {
    this._disposable = commands.registerCommand(Commands.createNodeApi, async (...args) => {
      window.withProgress(
        {
          location: ProgressLocation.Notification,
          title: '创建API',
          cancellable: true,
        },
        async (progress, token) => {
          token.onCancellationRequested(() =>log.error('🏷 取消创建'))

          this._logger = async (text: string) => {
            progress.report({ message: text })
            log.info(text)
          }
          this._logger(`register command ${Commands.createNodeApi}`)

          try {
            await this.quickPickPath()
            if (this._folders.length === 0) {
              await sleep(1000)
              await this.quickPickPath()
            }
            this._logger(`path: ${this._path}`)

            const { extensionPath } = context
            this._logger(extensionPath)

            // const template = await getTemplateCode(extensionPath, 'project.html.ejs')
            // this._logger(template)
            
            // fs.writeFileSync(
            //   componentFilePath,
            //   getTemplateCode(extensionPath, `component.${isUseTypeScript ? 't' : 'j'}sx.ejs`, {
            //     componentName,
            //     componentClassName,
            //     targetName
            //   }),
            //   'utf8'
            // )
          } catch (err) {
            log.error(err.message || err)
          }
        },
      )
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

}
