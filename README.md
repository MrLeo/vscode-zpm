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


## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
