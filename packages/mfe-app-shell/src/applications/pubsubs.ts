import { Subject, Subscription } from "rxjs";
import { EventName, EventArg } from "./events";
import { EventHandler } from "./events";

export class Pubsub<T extends EventArg> extends Subject<T> {
  name: string
  #subscriptions: Subscription[] = []

  constructor(name: string) {
    super()
    this.name = name
  }

  addSubscribe(handler: EventHandler<T>) {
    this.#subscriptions.push(super.subscribe(handler))
  }

  dispose() {
    this.#subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }
}

export function createPubsubs(): Map<string, Pubsub<EventArg>> {
  const pubsubs = new Map<string,Pubsub<EventArg>>()
  pubsubs.set(EventName.APP_BEFORE_MOUNT, new Pubsub<EventArg>(EventName.APP_BEFORE_MOUNT))
  pubsubs.set(EventName.APP_MOUNTED, new Pubsub<EventArg>(EventName.APP_MOUNTED))
  pubsubs.set(EventName.APP_UNMOUNTED, new Pubsub<EventArg>(EventName.APP_UNMOUNTED))
  pubsubs.set(EventName.APP_CHANGED, new Pubsub<EventArg>(EventName.APP_CHANGED))
  pubsubs.set(EventName.ROUTE_CHANGED, new Pubsub<EventArg>(EventName.ROUTE_CHANGED))
  return pubsubs
}