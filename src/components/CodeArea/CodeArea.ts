import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';

@CustomElement({
	selector: 'code-area',
	template: '<textarea />',
	style: `:host textarea {
        background-color: #ccc;
    }`
})
class CodeArea extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {}
}
