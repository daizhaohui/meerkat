import { IPageLifecycle, IComponentLifecycle } from '../applications/lifecycle'

export interface IAdapterApi {
  registerPage(route:string, lifeCycle: IPageLifecycle):void,
  registerComponent(name:string, lifeCycle: IComponentLifecycle):void
  renderComponent(container: HTMLElement, id: string, props:Record<string, unknown>): void
}


export function applyAdapter(api: IAdapterApi) {

}

export function createAdapterApi(): IAdapterApi {
  let appName = ''
  return {
    
  }
}