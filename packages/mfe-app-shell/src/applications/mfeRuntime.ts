import { IAppConfig, IResource } from "./appManager"
import { IComponentLifecycle, IPageLifecycle } from "./lifecycle"

export interface IMfeRutimeConfig {
  resouces: IResource
  appConfigs: IAppConfig[]
}

export interface IAppPage {
  appName: string,
  route: string
  lifecycle: IPageLifecycle
}

export interface IAppComponent {
  appName?: string
  name: string
  lifecycle: IComponentLifecycle
}

export interface IMfeRutime {
  config: IMfeRutimeConfig,
  pages: IAppPage[],
  components: IAppComponent[] 
}

export function create() {
  const mfe = window.__mfe__ as IMfeRutime
  if (mfe) {
    window.__mfe__  = {
      config: {},
      pages: [],
      compoents: []
    }
  }
}

export function addResource(resource: IResource): void {

}

export function addAppConfig(appConfig: IAppConfig): void {

}

export function addAppComponent(compoent: IAppComponent): void {

}

export function addAppPage(page: IAppPage): void {

}

export function getAppPage(name: string): IAppPage {

}

export function getAppComponent(name: string, appName?: string): IAppComponent {
  
}

export function getConfig(): IMfeRutimeConfig {

}
