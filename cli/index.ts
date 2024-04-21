#! /usr/bin/env node 
import { checkVersion, setCommand } from './init'

async function main() {
  await checkVersion()
  await setCommand()
  
  
}

main()
