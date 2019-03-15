/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 插件入口文件
 * @Date: 2019-03-12 16:58:32
 * @LastEditTime: 2019-03-15 12:04:38
 */

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext } from 'vscode'
import { registerCommands } from './commands'

// #region 激活插件
export function activate(context: ExtensionContext) {
  registerCommands(context)
}
// #endregion

// #region 销毁插件
export function deactivate() {}
// #endregion
