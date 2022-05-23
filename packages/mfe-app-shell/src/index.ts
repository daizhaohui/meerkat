import { EventBus as eventBus } from './utils/eventBus'
import { applyAdapter } from './adapter'
import { registerAppConfig, updateAppConfig, registerShareResource, bootstrap } from './applications/appManager'
import start  from './applications/start'

export * from './applications/events'
export {
  eventBus,
  applyAdapter,
  registerAppConfig,
  updateAppConfig,
  registerShareResource,
  updateShareResource,
  start
}

bootstrap()