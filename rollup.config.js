import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

/** @type {import('rollup').RollupOptions} */
const config = {
  input:'./cli/index.ts',
  output:[
    {
      file:'./bin/tci.mjs',
      format:'esm'
    }
  ],
  plugins:[
    typescript(),
    nodeResolve(),
    commonjs()
    
  ]
}

export default config
