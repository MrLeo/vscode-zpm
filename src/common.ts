/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 通用方法
 * @Date: 2019-03-13 20:17:45
 * @LastEditTime: 2019-03-18 17:35:13
 */

import { ExtensionContext, window, workspace, WorkspaceFolder } from 'vscode'

// #region CommandConstructor: 接口 - 命令构造函数
interface CommandConstructor {
  new (): any
}
// #endregion

// #region registrableCommands: 可注册的命令构造函数列表
const registrableCommands: CommandConstructor[] = []
// #endregion

// #region command: 修饰器 - 命令类
/**
 * 类修饰器
 * @export
 * @returns {ClassDecorator}
 */
export function command(): ClassDecorator {
  return (target: any) => {
    registrableCommands.push(target)
  }
}
// #endregion

// #region registerCommands: 注册命令
/**
 * 注册命令
 * @export
 * @param {ExtensionContext} context
 */
export function registerCommands(context: ExtensionContext) {
  for (const c of registrableCommands) {
    context.subscriptions.push(new c())
  }
}
// #endregion

// #region Commands: 枚举 - 命令
export enum Commands {
  tag = 'extension.tag',
}
// #endregion

// #region QuickPickItem: 接口 - 输入选项数据结构
export interface QuickPickItem {
  label: string // 命令
  description?: string // 命令描述
  path?: string // 工程路径
  versionName?: string // 配置不同环境的version属性名
}
// #endregion

// #region showQuickPick: 显示输入选项
/**
 * 显示输入选项
 * @param {QuickPickItem[]} QuickPickList
 * @returns
 */
export async function showQuickPick(QuickPickList: QuickPickItem[]) {
  return new Promise<QuickPickItem>((resolve, reject) => {
    try {
      window.showQuickPick(QuickPickList).then(command => {
        console.log('TCL: showQuickPick -> command', command)
        resolve(command)
      })
    } catch (err) {
      console.log('TCL: catch -> err', err)
      reject(err)
    }
  })
}
// #endregion

// #region getWorkspaceFolders: 获取目录列表
/**
 * 获取目录列表
 */
export function getWorkspaceFolders() {
  const workspaceFolders: WorkspaceFolder[] = workspace.workspaceFolders || []
  console.log('TCL: Tag -> getWorkspaceFolders -> workspaceFolders', workspaceFolders)
  console.log('TCL: Tag -> getWorkspaceFolders -> vscode.workspace.rootPath', workspace.rootPath)
  return workspaceFolders.map(folder => {
    return {
      label: folder.name,
      path: folder.uri.path,
    }
  })
}
// #endregion
