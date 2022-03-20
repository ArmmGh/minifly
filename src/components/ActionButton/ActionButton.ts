import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { Listen } from '../../decorators/Listen/Listen.decorator';
import { EventDispatcher } from '../../global/types';

@CustomElement({
    selector: 'action-button',
    template: '<button disabled><slot></slot></button>',
    // TODO: add styleUrl support
    // styleUrl: './ActionButton.styles.scss',
    style: `:host {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
    :host button {
        align-self: flex-end;
        margin: 5px 20px;
        padding: 5px 15px;
		color: #2F3C7E;
        border: 1px solid #2F3C7E;
	    background-color: #FBEAEB;
        border-radius: 8px;
		cursor: pointer;
        font-size: 15px;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
	}
    :host button:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 10px;
        transform: translateY(-1px);
    }
    :host button:active {
        box-shadow: none;
        transform: translateY(0);
    }
    :host button:disabled {
        cursor: initial;
        opacity: .4;
    }`
})
class ActionButton extends HTMLElement {
    constructor() {
        super();
    }
    @Listen('toggleButton', 'button')
    onToggleButton(event: CustomEvent) {
        const button = this.shadowRoot.lastChild as HTMLButtonElement;
        button.disabled = false;
    }

    @Listen('click', 'button')
    handleButtonClick(event: CustomEvent) {
        this.onButtonClick.emit();
    }

    @Dispatch('minify', document.getElementById('output'))
    private onButtonClick: EventDispatcher;
}
