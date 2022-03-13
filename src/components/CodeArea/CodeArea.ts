import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { EventDispatcher } from '../../global/types';
import { Listen } from '../../decorators/Listen/Listen.decorator';

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

	@Listen('input')
	private handleInput({ target }: Event): void {
		const realTarget = target as HTMLTextAreaElement;
		if (realTarget?.value.trim().length && this.firstTimeInit) {
			this.onInput.emit();
			this.firstTimeInit = false;
		}
	}

	@Listen('minify')
	private handleMinifyEvent() {
		const input = document.getElementById('input').shadowRoot.lastChild as HTMLTextAreaElement;
		const output = this.shadowRoot.lastChild as HTMLTextAreaElement;
		output.value = input.value;
	}

	constructor() {
		super();
	}

	connectedCallback() {
		if (this.shadowRoot.host.id === 'output') {
			document.addEventListener('minify', this.handleMinifyEvent);
		}
	}
}
