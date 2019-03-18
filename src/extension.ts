/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 插件入口文件
 * @Date: 2019-03-12 16:58:32
 * @LastEditTime: 2019-03-18 21:08:36
 */

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, window, StatusBarAlignment } from 'vscode'
import { registerCommands, Commands } from './commands'

// #region 激活插件
export function activate(context: ExtensionContext) {
  let tagBtn = window.createStatusBarItem(StatusBarAlignment.Left)
  tagBtn.command = Commands.tag
  tagBtn.text = `$(tag)`
  tagBtn.tooltip = '创建tag'
  tagBtn.show()
  registerCommands(context)
}
// #endregion

// #region 销毁插件
export function deactivate() {}
// #endregion
