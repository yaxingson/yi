import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { ROOT_PATH } from '../constant'

export async function getPkgInfo() {
  const pkg = await readFile(resolve(ROOT_PATH, 'package.json'), 'utf-8')
  return JSON.parse(pkg)
}
