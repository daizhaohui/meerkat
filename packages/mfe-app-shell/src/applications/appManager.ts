import { create } from './mfeRuntime'
import { createAppShell } from '../appShell'

export enum ResourceType {
  JS = 'js',
  FONT = 'font',
  CSS = 'css'
}

export  interface IResource {
  type: ResourceType,
  url: string
}
export interface IAppConfig {
  /**
   * 应用名称
   */
  name: string 
  resources: IResource[]
}


export function bootstrap() {
   //create app runtime: window.__mfe__
   create()
   //create share api: window.appShell
   createAppShell()
}
