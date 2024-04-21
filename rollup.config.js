import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import inject from '@rollup/plugin-inject'


/** @type {import('rollup').RollupOptions} */
const config = {
  input:'./cli/index.ts',
  output:[
    {
      file:'./bin/yi.cjs',
      format:'cjs'
    }
  ],
  plugins:[
    typescript(),
    nodeResolve({
      
    }),
    commonjs({}),
    
    
    
  ]
}

export default config
