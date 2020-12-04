var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, css, customElement } from 'lit-element';
import { TodoService } from './todo.service';
import './todo-item';
let XTodos = class XTodos extends LitElement {
    constructor() {
        super();
        this.todos = [];
        this.todoService = new TodoService();
        this.todos = this.todoService.getTodos();
    }
    static get styles() {
        return css `
      .hidden { display: none; }
    `;
    }
    render() {
        return html `
      <style>
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style: none;
        margin: 0 0 16px 0;
      }
      input {
        margin-bottom: 12px;
      }
      </style>
      <form @submit="${(e) => this.createTodo(e)}">
        <input placeholder="add todo item" aria-label="add todo item"/>
        <button>Add</button>
      </form>
      <ul>
      ${this.todos.map((t, i) => html `
      <li>
        <x-todo-item
          .todo="${t}"
          @update="${(e) => this.todoService.updateTodo(e.detail, i)}"
          @delete="${(e) => this.todoService.deleteTodo(e.detail)}"
        ></x-todo-item>
      </li>
      `)}
      </ul>
    `;
    }
    updateTodo(todo, index) {
        this.todos = this.todoService.updateTodo(todo, index);
    }
    deleteTodo(todo) {
        this.todos = this.todoService.deleteTodo(todo);
    }
    createTodo(e) {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const todo = input.value;
        if (todo.length > 0) {
            this.todos = this.todoService.createTodo(todo);
            input.value = '';
        }
    }
};
__decorate([
    property()
], XTodos.prototype, "todos", void 0);
XTodos = __decorate([
    customElement('x-todos')
], XTodos);
export default XTodos;
//# sourceMappingURL=todos.js.map