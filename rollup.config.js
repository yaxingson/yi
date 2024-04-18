import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input:'./cli/index.ts',
  output:[
    {
      file:'./bin/tci.cjs',
      format:'cjs'
    }
  ],
  plugins:[
    typescript(),
    nodeResolve(),
    commonjs(),
    
  ]
}