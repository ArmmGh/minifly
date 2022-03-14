import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { Listen } from '../../decorators/Listen/Listen.decorator';
import { EventDispatcher } from '../../global/types';

@CustomElement({
    selector: 'action-button',
    template: '<button disabled>Minify</button>',
    // TODO: add styleUrl support
    // styleUrl: './ActionButton.styles.scss',
    style: `:host button {
		color: #fff;
	    background: blue;
		cursor: pointer;
	}
	:host button:disabled {
		opacity: 0.6;
	}`
})
class ActionButton extends HTMLElement {
    constructor() {
        super();
    }
    @Listen('toggleButton')
    onToggleButton(event: CustomEvent) {
        const button = this.shadowRoot.lastChild as HTMLButtonElement;
        button.disabled = false;
    }

    @Listen('click')
    handleButtonClick(event: CustomEvent) {
        this.onButtonClick.emit();
    }

    @Dispatch('minify', document.getElementById('output'))
    private onButtonClick: EventDispatcher;
}
