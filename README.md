# zpm README

> 应用商店地址: [https://marketplace.visualstudio.com/items?itemName=MrLeo.zpm](https://marketplace.visualstudio.com/items?itemName=MrLeo.zpm)

# 参考地址

- [插件市场](https://marketplace.visualstudio.com/) / [插件管理](https://marketplace.visualstudio.com/manage)
- [vscode 插件开发](https://leo.xuebin.me/posts/a0508b9c.html)
- [vscode api](https://code.visualstudio.com/api/references/vscode-api)
- [使用 Webpack 优化 VS Code 插件加载性能](https://zhuanlan.zhihu.com/p/54428900)

# 创建 tag

为 git 仓库当前分支版本创建格式为 {环境}-v{版本号}-{日期} 的 tag，如：pre-v0.0.1-20190315

![](https://ws2.sinaimg.cn/large/006tKfTcly1g14herrdizg30so0llgrk.gif)

# 删除远端不存在的 tag

# 代码片段

## javascript

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
  ctx.log.info(`[standout] $1 -> `, $2)$3
  ```

- cle

  ```javascript
  ctx.log.error(`[standout] error -> $1`, err)$2
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

## css

- stylelint

  ```javascript
  /* stylelint-disable */
  ```

  ```javascript
  /* stylelint-enable */
  ```

  ```javascript
  // stylelint-disable-line
  ```

  ```javascript
  // stylelint-disable-next-line
  ```


# 开发

开启本地文件变更监听

```shell
npm run watch
```

开启调试模式`Extension Tests`

n2ondbg4x2hjh3m6ruunsbz7af64fz6xtttk4puyd4t2or4bpkla
