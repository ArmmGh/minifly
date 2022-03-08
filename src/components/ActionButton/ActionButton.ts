import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';

@CustomElement({
	selector: 'action-button',
	template: '<button disabled>Minify</button>',
	// TODO: add styleURL support
	// styleURL: './ActionButton.styles.scss'
	style: `:host button {
		color: #fff;
	    background: blue;
		cursor: pointer;
	}
	:host button:disabled {
		opacity: 0.6;
	}
	`
})
class ActionButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.shadowRoot.addEventListener('click', (event: Event) => {
			document.dispatchEvent(new CustomEvent('minify'));
		});

		document.addEventListener('toggleButton', (event) => {
			const button = this.shadowRoot.lastChild as HTMLButtonElement;
			button.disabled = false;
		});
	}
}
