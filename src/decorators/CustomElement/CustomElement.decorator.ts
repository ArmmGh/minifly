import { CustomElementMetadata } from '../../global/types';
import { validateSelector, validateTemplate } from './CustomElement.validator';

export function CustomElement({ selector, template, style, styleURL, useShadow = true }: CustomElementMetadata) {
	return (target: CustomElementConstructor): void => {
		validateSelector(selector);
		validateTemplate(template);

		const templateElement = document.createElement('template') as HTMLTemplateElement;
		if (style) {
			template = `<style>${style}</style> ${template}`;
		} else if (styleURL) {
			// const a = import(`../../ActionButton/${styleURL}`);
		}

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
		};

		customElements.define(selector, target);
	};
}
