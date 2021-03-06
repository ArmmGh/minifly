import { CustomElementMetadata } from '../../global/types';
import { addEventListenersTo } from '../Listen/Listen.decorator';
import { validateSelector, validateTemplate } from './CustomElement.validator';

export function CustomElement({ selector, template, style, styleUrl, useShadow = true }: CustomElementMetadata) {
    return (target: CustomElementConstructor): void => {
        validateSelector(selector);
        validateTemplate(template);

        const templateElement = document.createElement('template') as HTMLTemplateElement;

        if (style) {
            template = `<style>${style}</style> ${template}`;
        } else if (styleUrl) {
            // const a = import(`../../ActionButton/${styleUrl}`);
        }
        // Todo: convert {{}} to dynamic values
        templateElement.innerHTML = template;

        const connectedCallback = target.prototype.connectedCallback || function () {};
        target.prototype.connectedCallback = function () {
            const clone = document.importNode(templateElement.content, true);
            if (useShadow) {
                this.attachShadow({ mode: 'open' }).appendChild(clone);
            } else {
                this.appendChild(clone);
            }
            // besides custom callback calling Target's class callback
            connectedCallback.call(this);

            CustomElement.bindAttribute.call(this);
            addEventListenersTo(this);
        };

        customElements.define(selector, target);
    };
}

CustomElement.bindAttribute = function () {
    const elem = this as HTMLElement;
    const root = elem.shadowRoot || elem;

    root.innerHTML = root.innerHTML.replace(/{{(.*)}}/g, (match, propName) => {
        return elem[propName] || '';
    });
};
