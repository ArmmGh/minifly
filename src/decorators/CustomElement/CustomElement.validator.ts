import { CustomElementMetadata } from '../../global/types';

const validateSelector = (selector: CustomElementMetadata['selector']): void => {
	if (!~selector.indexOf('-')) {
		throw new Error('You need at least 1 dash in the custom element name!');
	}
};
const validateTemplate = (template: CustomElementMetadata['template']): void => {
	if (!template) {
		throw new Error('You need to pass a template for the element!');
	}
};

export { validateSelector, validateTemplate };
