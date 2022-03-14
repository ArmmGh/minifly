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

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.shadowRoot.host.id === 'output') {
            document.addEventListener('minify', this.handleMinifyEvent);
        }
    }

    @Dispatch('toggleButton', document.querySelector('action-button'))
    private onInput: EventDispatcher;

    @Listen('input', 'textarea')
    private handleInput({ target }: CustomEvent): void {
        const realTarget = target as HTMLTextAreaElement;
        if (realTarget.value.length && this.firstTimeInit) {
            this.onInput.emit();
            this.firstTimeInit = false;
        }
    }

    @Listen('minify')
    private handleMinifyEvent(event: CustomEvent) {
        const input = document.getElementById('input').shadowRoot.lastChild as HTMLTextAreaElement;
        const output = this.shadowRoot.lastChild as HTMLTextAreaElement;
        output.value = input.value;
    }
}
