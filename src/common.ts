/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 通用方法
 * @Date: 2019-03-13 20:17:45
 * @LastEditTime: 2019-03-15 12:05:26
 */

import { ExtensionContext } from 'vscode'

// #region 枚举命令
export enum Commands {
  tag = 'extension.tag',
}
// #endregion

// #region 注册命令
interface CommandConstructor {
  new (): any
}

const registrableCommands: CommandConstructor[] = []

export function command(): ClassDecorator {
  return (target: any) => {
    registrableCommands.push(target)
  }
}

export function registerCommands(context: ExtensionContext) {
  for (const c of registrableCommands) {
    context.subscriptions.push(new c())
  }
}
// #endregion
