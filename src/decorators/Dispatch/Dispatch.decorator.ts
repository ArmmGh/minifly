import { CustomEventOptions } from '../../global/types';

export function Dispatch(event?: string, eventTarget?: EventTarget): Function {
    return function (target: HTMLElement, propertyName: PropertyKey): void {
        if (!event) {
            event = String(propertyName);
        }
        function get() {
            const mainTarget: EventTarget = eventTarget || (this as EventTarget);
            return {
                emit(options?: CustomEventOptions): void {
                    mainTarget.dispatchEvent(new CustomEvent(event, options));
                }
            };
        }
        Object.defineProperty(target, propertyName, { get });
    };
}
