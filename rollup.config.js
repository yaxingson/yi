import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

/** @type {import('rollup').RollupOptions} */
const config = {
  input:'./cli/index.ts',
  output:[
    {
      file:'./bin/yi.mjs',
      inlineDynamicImports:true,
      format:'esm'
    }
  ],
  plugins:[
    typescript(),
    nodeResolve({
      preferBuiltins:false
    }),
    commonjs()
    
    
  ]
}

export default config
