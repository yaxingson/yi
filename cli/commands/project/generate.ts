import { basename } from 'node:path'
import { Command } from 'commander'

async function generateAction() {}

async function genCompAction(path:string) {
  if(!/\.(vue|tsx|svelte)$/.test(path)) return

  const componentName = basename(path)

  console.log(componentName)

}

async function genTestAction(path:string) {

}

const generateCommand = new Command('generate')
  .alias('g')
  .action(generateAction)

const subCommands = [
  new Command('comp')
    .argument('<path>', '')
    .action(genCompAction),
  new Command('test')
    .argument('<path>', '')
    .action(genTestAction)

]

subCommands.forEach(subCommand=>generateCommand.addCommand(subCommand))

export default generateCommand
