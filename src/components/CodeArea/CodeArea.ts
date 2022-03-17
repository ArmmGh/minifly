import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { EventDispatcher } from '../../global/types';
import { Listen } from '../../decorators/Listen/Listen.decorator';
import { Attribute } from '../../decorators/Attribute/Attribute.decorator';

@CustomElement({
    selector: 'code-area',
    template: `<header>{{header}}</header>
               <textarea />`,
    style: `
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        :host header {
            padding: 5px 10px;
            background-color: #2F3C7E;
            color: #FBEAEB;
        }
        :host textarea {
            outline: none;
            background-color: #FBEAEB;
            border: 1px solid #2F3C7E;
        }`
})
class CodeArea extends HTMLElement {
    private firstTimeInit: boolean = true;

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.shadowRoot.host.id === 'input') {
        } else if (this.shadowRoot.host.id === 'output') {
        }
    }
    
    @Attribute('header') header: string;

    @Dispatch('toggleButton', document.querySelector('action-button'))
    private onInput: EventDispatcher;

    @Listen('input', 'textarea')
    private handleInput({ target }: CustomEvent): void {
        if (this.shadowRoot.host.id === 'input') {
            const realTarget = target as HTMLTextAreaElement;
            if (realTarget.value.length && this.firstTimeInit) {
                this.onInput.emit();
                this.firstTimeInit = false;
            }
        }
    }

    @Listen('minify')
    private handleMinifyEvent(event: CustomEvent) {
        const input = document.getElementById('input').shadowRoot.lastChild as HTMLTextAreaElement;
        const output = this.shadowRoot.lastChild as HTMLTextAreaElement;
        output.value = input.value;
    }
}
