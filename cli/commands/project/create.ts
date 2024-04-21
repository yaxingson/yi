import { Command } from 'commander'
import inquirer from 'inquirer'
import { ROOT_PATH, CURRENT_PATH } from '../../constant'
import type { 
  CreateOptions 
} from '../../types/commands'

async function createAction(projectName:string, options:CreateOptions) {
  

}

export default new Command('create')
  .argument('<name>', 'new project name')
  .option('-t, --template <name>', '', 'vanilla')
  .option('-i, --inquirer', '', false)
  .action(createAction)
