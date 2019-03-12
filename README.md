# zpm-tag README

> https://xuebin.me/posts/a0508b9c.html

## 参考：

- [VS Code 插件开发文档-中文版](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/)
- [vscode 插件开发全攻略](http://blog.haoji.me/vscode-plugin-overview.html)
- [vscode 插件开发实践](https://juejin.im/post/5c63a56a6fb9a049e063d491)
- [插件市场](https://marketplace.visualstudio.com/) / [插件管理](https://marketplace.visualstudio.com/manage)

## 准备

```bash
# 插件生成器
npm install -g yo generator-code

# 打包&发布工具
npm install -g vsce

# 初始化代码
yo code
```

## 构建

```bash
# 打包
vsce package
```

This is the README for your extension "zpm-tag". After writing up a brief description, we recommend including the following sections.

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

- `myExtension.enable`: enable/disable this extension
- `myExtension.thing`: set to `blah` to do something

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

---

## Working with Markdown

**Note:** You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
- Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
- Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
