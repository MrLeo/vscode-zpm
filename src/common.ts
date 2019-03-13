import { ExtensionContext } from 'vscode'

// #region 枚举命令
export enum Commands {
  master = 'extension.tag.master',
  pre = 'extension.tag.pre',
  dev = 'extension.tag.dev',
  all = 'extension.tag.all',
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
