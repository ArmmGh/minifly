import { ListenerMetadata } from '../../global/types';

export function Listen(eventName: keyof GlobalEventHandlersEventMap | string, selector?: string): Function {
	return (target: any, propertyName: PropertyKey, descriptor: PropertyDescriptor) => {
		if (!target.constructor.listeners) {
			(target.constructor.listeners as ListenerMetadata[]) = [];
		}

		target.constructor.listeners.push({ selector, eventName, handler: target[propertyName] });
	};
}

export function addEventListeners(target: any) {
	if (target.constructor.listeners) {
		for (const listener of target.constructor.listeners as Array<ListenerMetadata>) {
		}
	}
	const rootTarget = target.shadowRoot || target;
}
