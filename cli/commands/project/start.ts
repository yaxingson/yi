import http from 'node:http'
import { resolve, extname } from 'node:path'
import { Command } from 'commander'
import { existsSync, readFile } from 'fs-extra'
import getPort from 'get-port'
import { parse } from '@swc/core'
import { compile } from 'svelte/compiler'
import { compileTemplate } from '@vue/compiler-sfc'
import { CURRENT_PATH } from '../../constant'


async function startAction(entry?:string) {
  const defaultEntries = ['index.html', 'App.vue', 'App.tsx', 'App.svelte']
  entry = entry || defaultEntries.find(item=>existsSync(resolve(CURRENT_PATH, item)))

  if(!entry) throw ''

  const ext = extname(entry).slice(1)
  const port = await getPort({port:[9527, 8000, 9000]})

  const server = http.createServer((req, res)=>{
    switch(ext) {
      case 'html':
        break
      case 'vue':
        break
      case 'react':
        break
      case 'svelte':
        break
    }
  })

  server.listen(port, ()=>{
    console.log(`server is ready on http://localhost:${port}/`)
  })
}

export default new Command('start')
  .argument('[entry]', 'entry file')
  .action(startAction)
