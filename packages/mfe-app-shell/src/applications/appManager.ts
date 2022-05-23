import { create, addPubsub, addListener, addAppConfig, addResource } from './mfeRuntime'
import { createAppShell } from '../appShell'
import { createListeners } from './listeners'
import { createPubsubs } from './pubsubs'
import { IAppConfig, IResource } from './types'
import { difineWebComponents } from '../component'


export  function registerAppConfig(config: IAppConfig | IAppConfig[]) {
  if (Array.isArray(config)) {
    config.forEach(item=>addAppConfig(item))
  } else {
    addAppConfig(config)
  }
}

export  function registerShareResource(resouce: IResource | IResource[]) {
  if (Array.isArray(resouce)) {
    resouce.forEach(item=>addResource(item))
  } else {
    addResource(resouce)
  }
}

export function updateAppConfig(configs:IAppConfig[]): void {

}

export function updateShareResource(resources: IResource[]): void {
  
}

export function bootstrap() {
   //create app runtime: window.__mfe__
   create()
   //create share api: window.appShell
   createAppShell()
   //create router listeners
   const listeners = createListeners()
   for(const item of listeners.entries()) {
    addListener(item[0], item[1])
   }
   // create event pubusub: 
   const pubsubs = createPubsubs()
   for(const item of pubsubs.entries()) {
    addPubsub(item[0], item[1])
   }
   // define webcomponent
   difineWebComponents()
}
