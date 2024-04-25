import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries:['./cli/index'],
  outDir:'bin',
  name:'yi',
  declaration:false,
  clean:true,
  rootDir:'.',
  sourcemap:false,
  rollup:{
    emitCJS:true,
    
  },
  
})
