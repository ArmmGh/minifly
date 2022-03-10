import { CustomEventOptions } from 'global/types';

export function Dispatch(event?: string, eventTarget?: EventTarget): Function {
	return function (target: HTMLElement, propertyName: PropertyKey): void {
		if (!event) {
			event = String(propertyName);
		}
		function get() {
			const self: EventTarget = eventTarget || this as EventTarget;
			return {
				emit(options?: CustomEventOptions): void {
                    console.log('AA', event, self)
					self.dispatchEvent(new CustomEvent(event, options));
				}
			};
		}
		Object.defineProperty(target, propertyName, { get });
	};
}
