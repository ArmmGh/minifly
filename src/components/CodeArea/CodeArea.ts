import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { EventDispatcher } from 'global/types';

@CustomElement({
	selector: 'code-area',
	template: '<textarea />',
	style: `:host textarea {
        background-color: #ccc;
    }`
})
class CodeArea extends HTMLElement {
	private firstTimeInit: boolean = true;

	@Dispatch('toggleButton')
	private onInput: EventDispatcher;

	constructor() {
		super();
	}
	connectedCallback() {
		this.shadowRoot.addEventListener('input', this.handleInputChange);

		if (this.shadowRoot.host.id === 'output') {
			document.addEventListener('minify', this.handleMinifyEvent);
		}
	}

	handleMinifyEvent = () => {
		const input = document.getElementById('input').shadowRoot.lastChild as HTMLTextAreaElement;
		const output = this.shadowRoot.lastChild as HTMLTextAreaElement;
		output.value = input.value;
	};

	handleInputChange = ({ target }: Event) => {
		const realTarget = target as HTMLTextAreaElement;

		if (realTarget?.value.trim().length && this.firstTimeInit) {
			this.onInput.emit();
			this.firstTimeInit = false;
		}
	};
}
