import {  fromEvent, Observable  } from "rxjs";

export enum ListenerName {
  POP_STATE = 'popstate',
  HASH_CHANGED = 'hashchange'
}

export function createListeners(): Map<string, Observable<unknown>> {
  const listeners = new Map<string, Observable<unknown>>()
  listeners.set(ListenerName.POP_STATE, fromEvent(document, ListenerName.POP_STATE))
  listeners.set(ListenerName.HASH_CHANGED, fromEvent(document, ListenerName.HASH_CHANGED))
  return listeners
}

export function handlePopState() {

}

export function handleHashChanged() {

}
