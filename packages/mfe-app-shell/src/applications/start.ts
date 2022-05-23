import { handlePopState, handleHashChanged } from './listeners'
import { getListener } from './mfeRuntime'
import { ListenerName } from './listeners'

export default function start() {
  // start listeners
  getListener(ListenerName.POP_STATE)?.subscribe(handlePopState)
  getListener(ListenerName.HASH_CHANGED)?.subscribe(handleHashChanged)
}