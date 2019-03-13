// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext } from 'vscode'
import { registerCommands } from './common'

// #region 激活插件
export function activate(context: ExtensionContext) {
  console.log('TCL: activate -> context', context)

  // let disposable = vscode.commands.registerCommand('extension.tag', uri => {
  //   vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`)
  //   vscode.commands.executeCommand('extension.relativePath').then(result => console.log('命令结果', result))
  //   console.log('TCL: activate -> getProjectPath', getProjectPath())
  // })
  // context.subscriptions.push(disposable)

  registerCommands(context)
}
// #endregion

// #region 销毁插件
export function deactivate() {}
// #endregion
