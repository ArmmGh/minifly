import { ConstructorWithListeners, ListenerMetadata } from '../../global/types';

export function Listen(eventName: keyof GlobalEventHandlersEventMap | string, selector?: string): Function {
    return (target: any, propertyName: PropertyKey, descriptor: PropertyDescriptor) => {
        if (!target.constructor.listeners) {
            (target.constructor.listeners as ListenerMetadata[]) = [];
        }
        target.constructor.listeners.push({ selector, eventName, handler: target[propertyName] });
    };
}

export function addEventListenersTo(target: HTMLElement & ConstructorWithListeners) {
    const listeners = target.constructor.listeners;
    const root = target.shadowRoot || target;
    if (listeners) {
        for (const listener of listeners) {
            const eventTarget = listener.selector ? root.querySelector(listener.selector) : target;
            eventTarget.addEventListener(listener.eventName, (e: CustomEvent) => {
                listener.handler.call(target, e);
            });
        }
    }
}
