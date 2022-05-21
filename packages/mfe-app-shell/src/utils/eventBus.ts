type EventType = string | symbol;
// An event handler can take an optional event argument
// and should not return a value
type Handler<T = unknown> = (event: T) => void;

export interface IEventBus<Events extends Record<EventType, unknown>> {
	on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
	off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
	emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
}

export class EventBus<Events extends Record<EventType, unknown>> implements IEventBus<Events>{

	/**
	 * Register an event handler for the given type.
	 * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
	 * @param {Function} handler Function to call in response to given event
	 * @memberOf eventBus
	 */
	on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void {
		throw Error('not implement')
	}
	/**
	 * Remove an event handler for the given type.
	 * If `handler` is omitted, all handlers of the given type are removed.
	 * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
	 * @param {Function} [handler] Handler function to remove
	 * @memberOf eventBus
	*/
	off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void {
		throw Error('not implement')
	}
	/**
		 * Invoke all handlers for the given type.
		 * If present, `'*'` handlers are invoked after type-matched handlers.
		 *
		 * Note: Manually firing '*' handlers is not supported.
		 *
		 * @param {string|symbol} type The event type to invoke
		 * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
		 * @memberOf eventBus
	*/
	emit<Key extends keyof Events>(type: Key, event: Events[Key]): void {
		throw Error('not implement')
	}
}
