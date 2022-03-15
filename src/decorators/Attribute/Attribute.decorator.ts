export function Attribute(name?: string) {
    return function (target: HTMLElement, propName: PropertyKey) {
        const get = function (this: HTMLElement) {
            return this.getAttribute(name);
        };

        // const attribute = target;
        Object.defineProperty(target, propName, { get });
    };
}
