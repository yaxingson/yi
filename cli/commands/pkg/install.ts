import { Command } from 'commander'
import { execa } from 'execa'
import { getPkgInfo } from '../../utils'
import { CURRENT_PATH } from '../../constant'

async function installAction() {
  const lockFiles = ['pnpm-lock.yaml', '']
  const { stdout } = await execa('npm', ['--version'])


}

export default new Command('install')
  .action(installAction)
