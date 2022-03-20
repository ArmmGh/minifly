import { Dispatch } from '../../decorators/Dispatch/Dispatch.decorator';
import { CustomElement } from '../../decorators/CustomElement/CustomElement.decorator';
import { EventDispatcher } from '../../global/types';
import { Listen } from '../../decorators/Listen/Listen.decorator';
import { Attribute } from '../../decorators/Attribute/Attribute.decorator';
import { minify } from '../../utils';

@CustomElement({
    selector: 'code-area',
    template: `<header>{{header}}</header>
               <textarea />`,
    style: `
        :host {
            width: 400px;
            display: flex;
            flex-direction: column;
            margin: 0 15px;
        }
        :host header {
            padding: 1rem;
            letter-spacing: 0.14rem;
            background-color: #2F3C7E;
            color: #FBEAEB;
            text-transform: uppercase;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        :host textarea {
            resize: none;
            height: 350px;
            padding: 5px 10px;
            outline: none;
            background-color: #FBEAEB;
            font-size: 16px;
            border: 1px solid #2F3C7E;
        }
        :host textarea::selection {
            color: #FBEAEB;
            background-color: rgb(47 60 126 / 65%);
        }
        `
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

    @Dispatch('toggleButton', document.querySelector('action-button').shadowRoot.querySelector('button'))
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
        output.value = minify(input.value);
    }
}
