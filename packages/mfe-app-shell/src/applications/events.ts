import { getPubsub } from "./mfeRuntime"

export enum EventName {
  APP_BEFORE_MOUNT = 'onAppBeforeMount',
  APP_MOUNTED = 'onAppMounted',
  APP_UNMOUNTED = 'onAppUnmounted',
  APP_CHANGED = 'onAppChanged',
  ROUTE_CHANGED = 'onRouteChanged'
}

export interface EventArg {
  data?: Record<string, unknown>
  name?: string 
  appName: string
}

export type EventHandler = (arg: EventArg) => void

export function onAppBeforeMount(handler: EventHandler) {
  getPubsub(EventName.APP_BEFORE_MOUNT)?.addSubscribe(handler)
}

export function onAppMounted(handler: EventHandler) {
  getPubsub(EventName.APP_MOUNTED)?.addSubscribe(handler)
}

export function onAppUnmounted(handler: EventHandler) {
  getPubsub(EventName.APP_UNMOUNTED)?.addSubscribe(handler)
}

export function onAppChanged(handler: EventHandler) {
  getPubsub(EventName.APP_CHANGED)?.addSubscribe(handler)
}

export function onRouteChanged(handler: EventHandler) {
  getPubsub(EventName.ROUTE_CHANGED)?.addSubscribe(handler)
}