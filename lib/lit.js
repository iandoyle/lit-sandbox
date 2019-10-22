// Import lit-html
import { html, render } from "lit-html";
// Define a template
const myTemplate = (name) => html `<p>Get ${name}</p>`;
// Render the template to the document
render(myTemplate("Lit"), document.body);
//# sourceMappingURL=lit.js.map