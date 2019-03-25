/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description:
 * @Date: 2019-03-25 09:27:06
 * @LastEditTime: 2019-03-25 15:58:24
 */

import { window, OutputChannel } from 'vscode'

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
   * @memberof LoggerBase
   */
  appendLine(message: any) {
    if (
      Object.prototype.toString.call(message) === '[object Object]' ||
      Object.prototype.toString.call(message) === '[object Array]'
    ) {
      message = JSON.stringify(message)
    }
    this.log.appendLine(`${this.prefix}${message}`)
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

  /**
   * @private
   * @param {*} message
   * @memberof Logger
   */
  private messageTypeHandler(message: any) {
    const typesMap = new Map()
    typesMap.set('[object Object]', () => {
      for (let item of message) {
        this.appendLine(`${item} -> ${message[item]}`)
      }
    })
    typesMap.set('[object Array]', () => {
      message.forEach((item: any) => {
        this.appendLine(item)
      })
    })

    let handler = typesMap.get(Object.prototype.toString.call(message))
    if (handler) {
      handler()
    } else {
      this.appendLine(message)
    }
  }

  info(message: String): void
  info(message: Array<any>): void
  info(message: Object): void
  /**
   * @param {*} message
   * @memberof Logger
   */
  info(message: any): void {
    this.messageTypeHandler(` -> ${message}`)
  }

  error(message: String): void
  error(message: Array<any>): void
  error(message: Object): void
  /**
   * @param {*} message
   * @memberof Logger
   */
  error(message: any): void {
    this.messageTypeHandler(`error -> ${message}`)
  }
}
