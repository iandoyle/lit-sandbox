// Import lit-html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement } from "lit-element";
import './todos';
// Define a template
let XApp = class XApp extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html `
      <header>
      <h1>Todos</h1>
      </header>
      <main>
      <x-todos></x-todos>
      </main>
      <footer>
      2020
      </footer>
    `;
    }
};
XApp = __decorate([
    customElement('x-app')
], XApp);
//# sourceMappingURL=lit.js.map