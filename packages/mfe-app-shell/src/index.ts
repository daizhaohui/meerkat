import { EventBus as eventBus } from './utils/eventBus'
import { applyAdapter } from './adapter'
import registerAppConfig from './applications/registerAppConfig'
import registerResource from './applications/registerResource'
import start  from './applications/start'
import { bootstrap } from './applications/appManager'

export * from './applications/events'
export {
  eventBus,
  applyAdapter,
  registerAppConfig,
  registerResource,
  start
}

bootstrap()