/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description:
 * @Date: 2019-03-25 09:27:06
 * @LastEditTime: 2019-03-25 18:00:09
 */

import { window, OutputChannel } from 'vscode'
export const isString = (obj: any) => typeof obj === 'string'

export class LoggerBase {
  private log: OutputChannel
  private prefix: string

  /**
   *Creates an instance of LoggerBase.
   * @memberof LoggerBase
   */
  constructor() {
    this.prefix = '[ZPM]'
    this.log = window.createOutputChannel('zpm/log')
    this.log.show()
  }

  /**
   * @param {*} message
   * @memberof Logger
   */
  appendLine(arg: any, prefix?: string) {
    let _prefix = this.prefix
    if (prefix) {
      _prefix = `${_prefix}-${prefix} -> `
    }

    if (Object.prototype.toString.call(arg) === '[object Object]') {
      Object.entries(arg).forEach(([key, value]) => {
        this.log.appendLine(
          `${_prefix}${key} -> ${isString(value) ? value : JSON.stringify(value)}`,
        )
      })
    } else if (Object.prototype.toString.call(arg) === '[object Array]') {
      arg.forEach((item: any) => {
        this.log.appendLine(`${_prefix}${isString(item) ? item : JSON.stringify(item)}`)
      })
    } else {
      this.log.appendLine(`${_prefix}${isString(arg) ? arg : JSON.stringify(arg)}`)
    }
  }
}

export default class Logger extends LoggerBase {
  /**
   *Creates an instance of Logger.
   * @memberof Logger
   */
  constructor() {
    super()
  }

  info(message: String): void
  info(message: Array<any>): void
  info(message: Object): void
  /**
   * @param {*} message
   * @memberof Logger
   */
  info(message: any): void {
    console.log('TCL: Logger -> message', message)
    this.appendLine(message)
  }

  error(message: String): void
  error(message: Array<any>): void
  error(message: Object): void
  /**
   * @param {*} message
   * @memberof Logger
   */
  error(message: any): void {
    console.log('TCL: Logger -> message', message)
    this.appendLine(message, 'error')
  }
}
