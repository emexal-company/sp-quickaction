import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Quickaction } from './quickaction.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-button';

export default function template(this: Quickaction) {

  const classes = {
    'spectrum-QuickActions--textOnly': this.textonly,
    'is-open': this.open,
  };

  return html`<div class="spectrum-QuickActions ${classMap(classes)}">
                <slot></slot>
              </div>`;
}
