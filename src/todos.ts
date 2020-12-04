import { LitElement, html, property, css, customElement } from 'lit-element';
import { TodoService } from './todo.service';
import { Todo } from './interfaces';
import './todo-item';

@customElement('x-todos')
class XTodos extends LitElement {
  @property()
  todos: Todo[] = [];

  todoService = new TodoService();

  constructor() {
    super();
    this.todos = this.todoService.getTodos();
  }
  static get styles() {
    return css`
      .hidden { display: none; }
    `;
  }

  render() {
    return html`
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
      <form @submit="${ (e: Event) => this.createTodo(e) }">
        <input placeholder="add todo item" aria-label="add todo item"/>
        <button>Add</button>
      </form>
      <ul>
      ${ this.todos.map((t, i) => html`
      <li>
        <x-todo-item
          .todo="${ t }"
          @update="${ (e: CustomEvent) => this.todoService.updateTodo(e.detail, i) }"
          @delete="${ (e: CustomEvent) => this.todoService.deleteTodo(e.detail) }"
        ></x-todo-item>
      </li>
      `) }
      </ul>
    `;
  }

  updateTodo(todo: Todo, index: number) {
    this.todos = this.todoService.updateTodo(todo, index);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todoService.deleteTodo(todo);
  }

  createTodo(e: any) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const todo = input.value;

    if (todo.length > 0) {
      this.todos = this.todoService.createTodo(todo);
      input.value = '';
    }
  }
}

export default XTodos;