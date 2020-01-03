// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext } from 'vscode'
import { registerCommands } from './commands'

// #region 激活插件
export function activate(context: ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "zpm" is now active!');

  registerCommands(context)

  // let tagBtn = window.createStatusBarItem(StatusBarAlignment.Left)
  // tagBtn.command = Commands.tag
  // tagBtn.text = `$(tag)`
  // tagBtn.tooltip = '创建tag'
  // tagBtn.show()
}
// #endregion

// #region 销毁插件
export function deactivate() {}
// #endregion
