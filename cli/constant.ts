import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT_PATH = resolve(fileURLToPath(import.meta.url), '..', '..')
export const CURRENT_PATH = process.cwd()
