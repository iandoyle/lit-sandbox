import { html, LitElement, property, customElement } from 'lit-element';
import { Todo } from './interfaces';

@customElement('x-todo-item')
export class XTodoItem extends LitElement {
  constructor() {
    super();
    this.todo = { completed: false, value: '' };
  }
  @property()
  todo: Todo;

  @property()
  editing = false;

  render() {
    return html`
    <style>
    .completed {
      text-decoration: line-through;
    }
    span {
      padding: 0 12px;
      cursor: pointer;
      background: chartreuse;
    }
    form {
      display: inline-block;
    }
    .hidden {
      display: none;
    }
    </style>
    <button
      @click="${ () => this.completeTodo() }"
      aria-label="mark done"
    >✓</button>

    ${ this.editing
        ?
        html`
      <form @submit="${ (e: any) => this.editTodo(e) }">
        <input .value="${ this.todo.value }"
          aria-label="create todo"
          placeholder="todo"
        />
      </form>
      `
        :
        html`
        <span class="${ this.todo.completed ? 'completed' : '' }" @click="${ () => this.toggleForm() }">
        ${ this.todo.value }
    </span>
      `
      }
      <button @click="${ () => this.deleteTodo() }" aria-label="delete todo">
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

  editTodo(e: any) {
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

  private emitUpdate() {
    this.dispatchEvent(new CustomEvent('update', { detail: this.todo }));
  }
}
