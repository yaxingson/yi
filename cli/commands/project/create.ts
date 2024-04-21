import { Command } from 'commander'
import inquirer from 'inquirer'
import { ROOT_PATH, CURRENT_PATH } from '../../constant'
import type { 
  CreateOptions 
} from '../../types/commands'

async function createAction(projectName:string, options:CreateOptions) {
  

}

export default new Command('create')
  .description('create a new project')
  .usage('<name> [options]')
  .argument('<name>', 'project name')
  .option('-t, --template', 'template', 'vanilla')
  .action(createAction)
