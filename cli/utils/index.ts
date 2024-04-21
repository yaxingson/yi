import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { existsSync } from 'fs-extra'
import { ROOT_PATH, CURRENT_PATH } from '../constant'

export async function getPkgInfo() {
  const pkg = await readFile(resolve(ROOT_PATH, 'package.json'), 'utf-8')
  return JSON.parse(pkg)
}

export async function getPackageManager() {
  const { packageManager } = await getPkgInfo()
  const lockFiles = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']
  const lockFile = lockFiles.find(file=>existsSync(resolve(CURRENT_PATH, file))) 

  
}
