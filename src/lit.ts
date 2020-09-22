// Import lit-html

import { LitElement, html, customElement } from "lit-element";
import './todos'
// Define a template

@customElement('x-app')
class XApp extends LitElement {
  constructor() {
    super()
  }

  render() {
    return html`
      <header>
      <h1>Todos</h1>
      </header>
      <main>
      <x-todos></x-todos>
      </main>
      <footer>
      2020
      </footer>
    `
  }
}