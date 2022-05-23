import { IAppComponent, IAppConfig, IAppPage, IAppStateInfo, IResource } from "./types"
import { Observable, Subscription } from 'rxjs'
import { Pubsub } from './pubsubs'
import { EventArg } from './events'

function getRumtime(): IMfeRutime {
  return window.__mfe__ as IMfeRutime
}

export function makeComponentId(name: string) {
  return `${name}_${getRumtime().count++}`
}

export interface IMfeRutimeConfig {
  resouces: IResource[]
  appConfigs: Map<string,IAppConfig>
}

export interface IMfeRutime {
  config: IMfeRutimeConfig,
  pages: Map<string,IAppPage>,
  components: Map<string,IAppComponent>,
  subscriptions: Subscription[],
  listeners: Map<string, Observable<unknown>>,
  pubsubs: Map<string, Pubsub<EventArg>>,
  apps: Map<string,IAppStateInfo>
  activedApp: string,
  count: number
}

export function create() {
  const mfe = window.__mfe__ as IMfeRutime
  if (mfe) {
    window.__mfe__  = {
      config: {
        resouces: [],
        appConfigs: new Map<string,IAppConfig>()
      },
      pages: new Map<string,IAppPage>(),
      compoents: new Map<string,IAppComponent>(),
      subscriptions: [],
      listeners: new Map<string, Observable<unknown>>(),
      pubsubs: new Map<string, Pubsub<EventArg>>(),
      apps: new Map<string,IAppStateInfo>(),
      activedApp: '',
      count: 1
    }
  }
}

export function addResource(resource: IResource): void {
  const mfe = getRumtime()
  mfe.config.resouces.push(resource)
}

export function addAppConfig(appConfig: IAppConfig): void {
  getRumtime().config.appConfigs.set(appConfig.name, appConfig)
}

export function addAppComponent(component: IAppComponent): void {
  getRumtime().components.set(component.name, component)
}

export function getAppComponent(name: string): IAppComponent | undefined {
  return getRumtime().components.get(name)
}

export function updateAppComponent(component: IAppComponent) {
  getRumtime().components.set(component.name, component)
}

export function getAppStateInfo(name: string): IAppComponent | undefined {
  return getRumtime().components.get(name)
}

export function updateAppStateInfo(appStateInfo: IAppStateInfo) {
  getRumtime().apps.set(appStateInfo.appName, Object.assign({}, appStateInfo) as IAppStateInfo)
}

export function addAppPage(page: IAppPage): void {
  getRumtime().pages.set(page.appName, page)
}

export function addSubscription(subscription:Subscription):void {
  const mfe = getRumtime()
  mfe.subscriptions.push(subscription)
}

export function getAppPage(appName: string): IAppPage | undefined {
  return getRumtime().pages.get(appName)
}

export function getConfig(): IMfeRutimeConfig {
  return getRumtime().config
}

export function addListener(name: string, observable: Observable<unknown>): void {
  getRumtime().listeners.set(name, observable)
}

export function getListener(name: string): Observable<unknown> | undefined{
  return getRumtime().listeners.get(name)
}

export function addPubsub(name: string, pubsub: Pubsub<EventArg>): void {
  getRumtime().pubsubs.set(name, pubsub)
}

export function getPubsub(name: string): Pubsub<EventArg> | undefined{
  return getRumtime().pubsubs.get(name)
}

export function getActiveApp(): string {
  return getRumtime().activedApp
}

export function dispose(): void {
  const mfe = getRumtime()
  try {
    mfe.subscriptions.forEach(sub=>sub.unsubscribe())
    mfe.pubsubs.forEach(pb => pb.dispose())
  } catch (err) {
    console.error(err)
  }
}
