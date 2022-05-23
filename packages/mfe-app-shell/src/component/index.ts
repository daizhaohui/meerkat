import { getAppComponent, makeComponentId } from '../applications/mfeRuntime'

export function renderExtensionComponent(name: string, container:HTMLElement, props?: Record<string, unknown>) {
  const compId = makeComponentId(name)
  const appComponent = getAppComponent(name)
  appComponent?.lifecycle.render(container, props)
  appComponent?.lifecycle?.mount()
}

export class ExtenstionComponent extends HTMLElement {
  #shadowRoot: ShadowRoot | null
  constructor() {
    super()
    this.#shadowRoot = this.attachShadow({mode: 'open'})
  }

  render() {
    const attrs = this.getAttributeNames()
    const props: Record<string, unknown> = {}
    attrs.forEach(name=>{
      props[name] = this.getAttribute(name)
    })
    if(props.name) {
      const div = document.createElement('div')
      renderExtensionComponent(props.name as string, div, props)
      this.#shadowRoot?.appendChild(div)
    }
  }
}

export function difineWebComponents() {
  window.customElements.define('ext-comopnent', ExtenstionComponent)
}


