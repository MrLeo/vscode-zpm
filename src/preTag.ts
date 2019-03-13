import { command, Commands } from './common'
import { Tag } from './tag'

@command()
export class PreTag extends Tag {
  constructor() {
    super(Commands.pre)
  }
}
