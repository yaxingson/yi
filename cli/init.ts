import { compare } from 'semver'
import { Command, program } from 'commander'
import { getPkgInfo } from './utils'
import * as commands from './commands'

export function checkVersion() {
  console.log(compare)


}

export async function setCommand() {
  const { version } = await getPkgInfo()
  
  program.name('yi')
    .version(version)
    .description('yet another command-line interface')
    .usage('<command> [options]')

  Object.keys(commands).forEach(name=>{
    const command:Command = Reflect.get(commands, name)
    program.addCommand(command)
  })

  
  program.parse(process.argv)
}
