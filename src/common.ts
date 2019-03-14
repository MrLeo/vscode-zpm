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
