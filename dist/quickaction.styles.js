/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { css } from 'lit-element';
export default css `.spectrum-QuickActions{--spectrum-dropdown-flyout-menu-offset-y: var(--spectrum-global-dimension-size-75);--spectrum-quickactions-padding-y: var(--spectrum-global-dimension-size-50);--spectrum-quickactions-padding-x: var(--spectrum-global-dimension-size-50);--spectrum-quickactions-height: var(--spectrum-global-dimension-size-500);--spectrum-quickactions-border-radius: var(--spectrum-alias-border-radius-regular);--spectrum-quickactions-icon-button-gap-x: var(--spectrum-global-dimension-size-100);--spectrum-quickactions-text-button-gap-x: var(--spectrum-global-dimension-size-50);--spectrum-quickactions-overlay-color: var(--spectrum-alias-background-color-quickactions-overlay);--spectrum-quickactions-background-color: var(--spectrum-alias-background-color-quickactions)}.spectrum-QuickActions{visibility:hidden;opacity:0;transition:transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out,opacity var(--spectrum-global-animation-duration-100, 130ms) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100, 130ms);pointer-events:none}.spectrum-QuickActions.is-open{visibility:visible;opacity:1;transition-delay:0ms;pointer-events:auto}.spectrum-QuickActions--left.is-open{transform:translateX(var(--spectrum-dropdown-flyout-menu-offset-y, var(--spectrum-global-dimension-size-75)))}.spectrum-QuickActions--right.is-open{transform:translateX(calc(-1 * var(--spectrum-dropdown-flyout-menu-offset-y, var(--spectrum-global-dimension-size-75))))}.spectrum-QuickActions{box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--spectrum-quickactions-padding-y, var(--spectrum-global-dimension-size-50)) var(--spectrum-quickactions-padding-x, var(--spectrum-global-dimension-size-50));height:var(--spectrum-quickactions-height, var(--spectrum-global-dimension-size-500));border-radius:var(--spectrum-quickactions-border-radius, var(--spectrum-alias-border-radius-regular))}.spectrum-QuickActions .spectrum-ActionButton+.spectrum-ActionButton{margin-left:var(--spectrum-quickactions-icon-button-gap-x, var(--spectrum-global-dimension-size-100))}.spectrum-QuickActions--textOnly .spectrum-ActionButton+.spectrum-ActionButton{margin-left:var(--spectrum-quickactions-text-button-gap-x, var(--spectrum-global-dimension-size-50))}.spectrum-QuickActions-overlay{background-color:var(--spectrum-quickactions-overlay-color, var(--spectrum-alias-background-color-quickactions-overlay))}.spectrum-QuickActions{background-color:var(--spectrum-quickactions-background-color, var(--spectrum-alias-background-color-quickactions))}`;
//# sourceMappingURL=quickaction.styles.js.map