#! /usr/bin/env node 
import { download } from './download'

async function main() {
  await download({ username:'sgk-samuel', repo:'template-presets'})



}

main()
