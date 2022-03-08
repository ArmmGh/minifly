import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';

@CustomElement({
	selector: 'action-button',
	template: '<button>Minify</button>',
	style: `:host button {
		color: #fff;
        background: blue;
		cursor: pointer;
    }`
})
class ActionButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.shadowRoot.addEventListener('click', (event: Event) => console.log);
	}
}
