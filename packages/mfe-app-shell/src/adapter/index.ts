import { IPageLifecycle, IComponentLifecycle, IAppPage, IAppComponent } from '../applications/types'
import { addAppPage, addAppComponent, updateAppComponent } from '../applications/mfeRuntime'
import { first, from, Subject } from 'rxjs'
import { renderExtensionComponent as render } from '../component'

type AdapterHandler = (api:IAdapterApi) => void

export interface IAdapterApi {
  registerPage(route:string, lifeCycle: IPageLifecycle):void,
  registerExtensionComponent(name:string, lifeCycle: IComponentLifecycle):void
  renderExtensionComponent(name:string, container: HTMLElement, props?:Record<string, unknown>): void
}

export class AdapterApi implements IAdapterApi {
  #appName: string
  #subject: Subject<string> | null
  constructor() {
    this.#appName = ''
    this.#subject = new Subject<string>()
  }

  registerPage(route: string, lifecycle: IPageLifecycle): void {
    from(route.split('/')).pipe(first(v=>v!=='/')).subscribe(name=>{
      this.#appName = name;
      lifecycle?.bootstrap()
      addAppPage({
        appName: name,
        route,
        lifecycle
      } as IAppPage)
      this.#subject?.next(name)
    })
  }
  registerExtensionComponent(name: string, lifecycle: IComponentLifecycle): void {
    if(this.#appName) {
      lifecycle?.bootstrap()
      addAppComponent({
        appName: this.#appName,
        name,
        lifecycle
      } as IAppComponent)
    } else {
      lifecycle?.bootstrap()
      addAppComponent({
        name,
        lifecycle
      } as IAppComponent)
      const subscription = this.#subject?.subscribe(value=>{
        updateAppComponent({
          appName: value,
          name,
          lifecycle
        } as IAppComponent)
        setTimeout(()=>{
          subscription?.unsubscribe()
        }, 0)
      })
    }
  }
  renderExtensionComponent(name: string, container: HTMLElement, props?: Record<string, unknown>): void {
    render(name, container, props)
  }
}

export function applyAdapter(handler: AdapterHandler): void {
  handler(new AdapterApi())
}