import { promisify } from 'node:util'
import { execaCommand } from 'execa'
import { compare } from 'semver'
import { Command, program } from 'commander'
import { getPkgInfo } from './utils'
import * as commands from './commands'
import figlet from 'figlet'

export async function checkVersion() {
  const { engines } = await getPkgInfo()
  const { node, npm } = engines
  const { stdout:nodeVersion } = execaCommand('node --version')
  const { stdout: npmVersion } = execaCommand('npm --version')

}

export async function setCommand() {
  const { version, scripts } = await getPkgInfo()

  // const helpText = await promisify(figlet.text as any)('Yi', '3D-ASCII')

  program.name('yi')
    .version(version)
    .description('yet another command line interface')
    .usage('<command> [options]')

    
  program.helpCommand('help', '')
    .usage('<command> help')

  Object.keys(commands).forEach(name=>{
    const command:Command = Reflect.get(commands, name)
    program.addCommand(command)
  })

  program.configureOutput({
    outputError(msg, write) {
      const pattern = /unknown\scommand\s'(.+)'/

      if(pattern.test(msg)) {
        const script = msg.match(pattern)![1]


      }
    }
  })

  program.parse(process.argv)
}
