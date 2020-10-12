import { customElement, property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import quickactionStyles from './quickaction.styles';
import template from './quickaction.template';

@customElement('sp-quickaction')
export class Quickaction extends Base {
  public static componentStyles = [quickactionStyles];

  @property({ type: Boolean }) public open: boolean = false;
  @property({ type: Boolean }) public textonly: boolean = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-quickaction': Quickaction;
  }
}



