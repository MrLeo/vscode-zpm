/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description:
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-03-13 20:21:33
 */
import { commands, Disposable } from 'vscode'

const git = require('simple-git/promise')(process.cwd())
const envConfig = { master: 'version', pre: 'version_pre', dev: 'version_dev' } // 配置不同环境的version属性名

// #region 接口声明
interface Version {
  env?: string
  tag?: string
  version?: string
}
// #endregion

export class Tag {
  private _disposable: Disposable

  constructor(command: string) {
    this._disposable = commands.registerCommand(command, (...args) => {
      console.log('TCL: AddTag -> constructor -> args', args)
    })
  }

  // #region 根据Tag列表添加Tag
  /**
   * 根据Tag列表添加Tag
   * @param {string} env master|pre|dev|all
   */
  async addTagByTags(env: string) {
    // const tags = fs.readdirSync('./.git/refs/tags'); // 同步版本的readdir
    await this.commitAllFiles()
    await git.pull({ '--rebase': 'true' })
    const tags = await git.tags()

    let addTagSingle = async (envName: string) => {
      const reg = new RegExp(`^${envName}`)
      let envTags = tags.all.filter((tag: string) => reg.test(tag))
      let lastTag = envTags[envTags.length - 1] || `${envName}-v0.0.0-19000101`
      // log(chalk`{gray 🏷  仓库最新的Tag: ${lastTag}}`)
      let lastVsersion = lastTag.split('-')[1].substring(1)
      let version = await this.generateNewTag(envName, lastVsersion)
      // log(chalk`{gray 🏷  生成最新的Tag: ${version.tag}}`)
      await this.createTag([version])
    }

    if (env === 'all') {
      await Promise.all(Object.keys(envConfig).map(key => addTagSingle(key)))
    } else {
      await addTagSingle(env)
    }
  }
  // #endregion

  // #region commit 所有未提交的文件
  /**
   * commit 所有未提交的文件
   */
  async commitAllFiles() {
    let statusSummary = await git.status()
    if (statusSummary.files.length) {
      // log(chalk`{red 🚨  有未提交的文件变更}`)
      // log(chalk`{gray ➕  暂存未提交的文件变更}`)
      await git.add('./*')
      // log(chalk`{gray ✔️  提交未提交的文件变更}`)
      await git.commit('🚀')
    }
  }
  // #endregion

  // #region 创建Tag
  /**
   * 创建Tag
   * @param {*} versions
   */
  async createTag(versions: Array<Version>) {
    // log(chalk`{green 🔀  更新本地仓库}`)
    await git.pull({ '--rebase': 'true' })

    versions.forEach(async (version: Version) => {
      // log(chalk`{green 🏷  创建标签 ${version.tag}}`)
      await git.addTag(version.tag)
    })
  }
  // #endregion

  // #region 生成新Tag
  /**
   * 生成新Tag
   * @param {string} env master|pre|dev|all
   * @param {string} version
   */
  generateNewTag(env: string = 'pre', version: string = '0.0.0') {
    return new Promise(resolve => {
      const semver = require('semver')
      // const major = semver.major(version)
      const minor = semver.minor(version)
      const patch = semver.patch(version)
      const date = formatTime(new Date(), '{y}{m}{d}')
      const config = { env, version, tag: `${env}-v${version}-${date}` }
      if (patch >= 99) {
        config.version = semver.inc(version, 'minor')
      } else if (minor >= 99) {
        config.version = semver.inc(version, 'major')
      } else {
        config.version = semver.inc(version, 'patch')
      }
      config.tag = `${env}-v${config.version}-${date}`
      resolve(config)

      // const Bump = require('bump-regex') // 为git的version添加自动增长版本号组件
      // Bump(`version:${version}`, (err, out) => {
      //   if (out) {
      //     const date = formatTime(new Date(), '{y}{m}{d}')
      //     resolve({
      //       env,
      //       version: out.new,
      //       tag: `${env}-v${out.new}-${date}`
      //     })
      //   } else {
      //     reject(err)
      //   }
      // })
    })
  }
  // #endregion
}

// #region 格式化时间
/**
 * 格式化时间
 *
 * @param  {time} 时间
 * @param  {cFormat} 格式
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 */
function formatTime(time: string | number | Date, cFormat: string): string {
  if (arguments.length === 0) {
    return ''
  }
  if (`${time}`.length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }

  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return value || 0
  })
  return time_str
}
// #endregion
