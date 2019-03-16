# zpm README

> 应用商店地址: [https://marketplace.visualstudio.com/items?itemName=MrLeo.zpm](https://marketplace.visualstudio.com/items?itemName=MrLeo.zpm)

# 创建 tag

为 git 仓库创建格式为 {环境}-v{版本号}-{日期} 的 tag，如：pre-v0.0.1-20190315

![](https://ws2.sinaimg.cn/large/006tKfTcly1g14herrdizg30so0llgrk.gif)

# 代码片段

## javascript

- zpfe.init

  ```javascript
  /*
   * @Company: 智联招聘
   * @Author: zhaopin.com
   * @LastEditors: Leo
   * @version: 0.0.0
   * @Date: 2019-02-20 17:17:42
   * @LastEditTime: 2019-02-20 17:18:40
   * @Description:
   */

  import qs from 'qs'
  import ZPError from '../../util/error'
  import { initHandler, errorHandler, throwIfMiss } from '../../util/'
  import request from '../../util/request'

  async function POST(ctx) {
    try {
      const init = await initHandler(ctx, { checkAT: true })
      let params = {
        loginUserId: init.loginUserId,
      }

      let { data: res } = await request(ctx).post(`?${qs.stringify(params)}`)

      ctx.response.body = res
      // ctx.response.set({ code: 200, data: res, message: res.message || '成功', taskId: res.taskId || ctx.request.headers.get('x-zp-request-id') })
    } catch (err) {
      errorHandler(ctx, err)
    }
  }

  async function GET(ctx) {
    try {
      const init = await initHandler(ctx, { checkAT: true })
      let params = {
        loginUserId: init.loginUserId,
      }

      let { data: res } = await request(ctx).get(``, { params })

      ctx.response.body = res
      // ctx.response.set({ code: 200, data: res, message: res.message || '成功', taskId: res.taskId || ctx.request.headers.get('x-zp-request-id') })
    } catch (err) {
      errorHandler(ctx, err)
    }
  }

  export default { GET, POST }
  ```

- eslint

  ```javascript
  /* eslint-disable */
  ```

  ```javascript
  /* eslint-enable */
  ```

  ```javascript
  // eslint-disable-line
  ```

  ```javascript
  // eslint-disable-next-line
  ```

- cli

  ```javascript
  ctx.log.info(`[standout] $1 -> `, JSON.stringify($2))$3
  ```

- cle

  ```javascript
  ctx.log.error(`[standout] error -> $1`, simplify(err))$2
  ```

- zpthrow

  ```javascript
  throw new ZPError({ code: ${1:res.code || 500}, message: ${2:res.message || '出错了'}, taskId: ${3:res.taskId || ctx.request.headers.get('x-zp-request-id') ||''} })
  ```

- cl

  ```javascript
  console.log(`[$1]$2 -> $3`,$4)$5
  ```

  ```javascript
  console.log(`%c[$1]$2 -> $3`,'color:#1B8BFF;',$4)$5
  ```

- cg

  ```javascript
  console.groupCollapsed(`------------------> $1 <------------------`)
  console.log(`[${2:LOG}]$3 -> $4`,$5)$6
  console.groupEnd()
  ```

# 参考：

- [插件市场](https://marketplace.visualstudio.com/) / [插件管理](https://marketplace.visualstudio.com/manage)
- [vscode 插件开发](https://xuebin.me/posts/a0508b9c.html)
