import { html } from 'lit-element';
import { DemoQuickaction } from './demo-quickaction.component';

import '@spectrum/sp-quickaction';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';


export default function template(this: DemoQuickaction) {
  return html`
  <sp-container>
    <section>
    <sp-rule medium label="Quick Actions - Standard"></sp-rule>
    <br>
      <sp-demo width="220">
        <pre><div style="background-color: rgba(0, 0, 0, 0.2);">
  <sp-quickaction open>
    <sp-button type="action" quiet icon="Edit"></sp-button>
    <sp-button type="action" quiet icon="Copy"></sp-button>
    <sp-button type="action" quiet icon="Delete"></sp-button>
  </sp-quickaction>
</div></pre>
      </sp-demo>
    <sp-demo width="220">
        <pre><div style="background-color: rgba(0, 0, 0, 0.2);">
  <sp-quickaction textonly open>
    <sp-button type="action" quiet label="Edit"></sp-button>
    <sp-button type="action" quiet label="Copy"></sp-button>
    <sp-button type="action" quiet label="Delete"></sp-button>
  </sp-quickaction>
</div></pre>
      </sp-demo>
    </section>
  </sp-container>
  `;
}


