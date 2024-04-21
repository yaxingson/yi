import { basename } from 'node:path'
import { Command } from 'commander'

async function genAction() {}

async function genCompAction(path:string) {
  if(!/\.(vue|tsx|svelte)$/.test(path)) return

  const componentName = basename(path)

}

const genCommand = new Command('gen')
  .action(genAction)

const subCommands = [
  new Command('comp')
    .argument('<path>', '')
    .action(genCompAction),

]

subCommands.forEach(subCommand=>genCommand.addCommand(subCommand))

export default genCommand
