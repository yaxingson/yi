import { downloadTemplate } from 'giget'

interface DownloadConfig {
  platform?:'github'|'gitee'
  username:string
  repo:string
} 

export async function download(config:DownloadConfig) {
  const {
    platform = 'github',
    username,
    repo
  } = config

  await downloadTemplate(`${platform}:${username}/${repo}`, {
    forceClean:true, 
    dir:'cache/app'
  }) 

}

