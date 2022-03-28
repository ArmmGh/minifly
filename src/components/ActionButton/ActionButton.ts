import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { Listen } from '../../decorators/Listen/Listen.decorator';
import { EventDispatcher } from '../../global/types';

@CustomElement({
    selector: 'action-button',
    template: '<button><slot></slot></button>',
    // TODO: add styleUrl support
    // styleUrl: './ActionButton.styles.scss',
    style: `:host {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
    :host button {
        align-self: flex-end;
        margin: 0px 15px;
        padding: 5px 15px;
		color: #FBEAEB;
        border: none;
        letter-spacing: 0.1rem;
	    background-color: #2F3C7E;
        border-radius: 5px;
		cursor: pointer;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.25) 0 5px 8px;
        transition: all 500ms cubic-bezier(.23, 1, 0.32, 1);
	}
    :host button:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 10px;
        transform: translateY(-1px);
    }
    :host button:active {
        box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
        transform: translateY(0);
    }
    :host button:disabled {
        cursor: initial;
        opacity: .4;
    }
    `
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

    @Listen('click')
    handleButtonClick(event: CustomEvent) {
        const target = event.target as HTMLElement;

        switch (target.id) {
            case 'selectAll':
                this.onSelectAll.emit();
                break;
            case 'minify':
                this.onButtonClick.emit();
                break;
            case 'copy':
                this.onCopy.emit();
                break;
            default:
                break;
        }
    }

    @Listen('copied')
    private handleCopiedEvent(event: CustomEvent) {}

    @Dispatch('minify', document.getElementById('output'))
    private onButtonClick: EventDispatcher;

    @Dispatch('copy', document.getElementById('output'))
    private onCopy: EventDispatcher;

    @Dispatch('selectAll', document.getElementById('output'))
    private onSelectAll: EventDispatcher;
}
