var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, property, customElement } from 'lit-element';
let XTodoItem = class XTodoItem extends LitElement {
    constructor() {
        super();
        this.editing = false;
        this.todo = { completed: false, value: '' };
    }
    render() {
        return html `
    <style>
    .completed {
      text-decoration: line-through;
    }
    span {
      padding: 0 12px;
    }
    form {
      display: inline-block;
    }
    .hidden {
      display: none;
    }
    </style>
    <button
      @click="${() => this.completeTodo()}"
      aria-label="mark done"
    >✓</button>

    ${this.editing
            ?
                html `
      <form @submit="${(e) => this.editTodo(e)}">
        <input .value="${this.todo.value}"
          aria-label="create todo"
          placeholder="todo"
        />
      </form>
      `
            :
                html `
        <span class="${this.todo.completed ? 'completed' : ''}" @click="${() => this.toggleForm()}">
        ${this.todo.value}
    </span>
      `}
      <button @click="${() => this.deleteTodo()}" aria-label="delete todo">
      x
      </button>`;
    }
    completeTodo() {
        this.todo = { ...this.todo, completed: !this.todo.completed };
        this.emitUpdate();
    }
    deleteTodo() {
        this.dispatchEvent(new CustomEvent('delete', { detail: this.todo }));
        this.classList.add('hidden');
    }
    editTodo(e) {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const todo = input.value;
        if (todo.length > 0) {
            this.todo.value = todo;
            this.toggleForm();
            this.emitUpdate();
        }
    }
    toggleForm() {
        this.editing = !this.editing;
    }
    emitUpdate() {
        this.dispatchEvent(new CustomEvent('update', { detail: this.todo }));
    }
};
__decorate([
    property()
], XTodoItem.prototype, "todo", void 0);
__decorate([
    property()
], XTodoItem.prototype, "editing", void 0);
XTodoItem = __decorate([
    customElement('x-todo-item')
], XTodoItem);
export { XTodoItem };
//# sourceMappingURL=todo-item.js.map