import { Command } from 'commander'
import ejs from 'ejs'
import { HTTPServer } from '../../utils'
import { CURRENT_PATH } from '../../constant'

async function inspectAction() {
  


}

export default new Command('inspect')
  .action(inspectAction)
