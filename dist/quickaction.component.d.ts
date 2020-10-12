import { Base } from '@spectrum/sp-base';
export declare class Quickaction extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    open: boolean;
    textonly: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-quickaction': Quickaction;
    }
}
