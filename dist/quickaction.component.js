import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import quickactionStyles from './quickaction.styles';
import template from './quickaction.template';
let Quickaction = class Quickaction extends Base {
    constructor() {
        super(...arguments);
        this.open = false;
        this.textonly = false;
    }
    render() {
        return template.call(this);
    }
};
Quickaction.componentStyles = [quickactionStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Quickaction.prototype, "open", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Quickaction.prototype, "textonly", void 0);
Quickaction = __decorate([
    customElement('sp-quickaction')
], Quickaction);
export { Quickaction };
//# sourceMappingURL=quickaction.component.js.map