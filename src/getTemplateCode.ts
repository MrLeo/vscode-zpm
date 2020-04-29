/**
 * https://github.com/raxjs/rax-vscode-extensions/blob/master/extensions/vscode-create-rax/src/createComponent.js
 */

import {readFileSync} from 'fs-extra'
import {join} from 'path'

const _cache:any = {};

export function getTemplateCode(extensionPath:string, templateName:string) {
  let template = _cache[templateName]

  if (!template) {
    template = _cache[templateName] =
      readFileSync(
        join(extensionPath, 'src/templates/', templateName),
        'utf-8'
      )
  }

  return template
}
