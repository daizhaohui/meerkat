export enum ResourceType {
  JS = 'js',
  FONT = 'font',
  CSS = 'css'
}

export enum AppState {
  NONE,
  LOADING,
  LOADED
}

export interface IPageLifecycle {
  bootstrap(): void
  mount(target: HTMLElement): unknown | void
  unmount(target: HTMLElement, instatnce?:unknown): void
}

export interface IComponentLifecycle {
  bootstrap(): void
  mount(target: HTMLElement, props?:Record<string,unknown>): unknown | void
  unmount(target: HTMLElement,instatnce:unknown): void
}

export interface IRenderComponentState {
  props?: Record<string,unknown>
  key?: string
  name: string
  id: string
}

export interface IAppStateInfo {
  status: AppState
  appName: string
  config: IAppConfig,
  components?: Map<string, IRenderComponentState>
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