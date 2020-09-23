import { Todo } from "./interfaces";

export class TodoService {
  getTodos() {
    const localstorage = JSON.parse(localStorage.getItem('todos') || '[]');
    const todos: Todo[] = localstorage;
    return todos;
  }

  updateTodo(todo: Todo, index: number) {
    const todos = this.getTodos();
    todos[index] = todo;
    return this.saveTodos(todos);
  }

  deleteTodo(todo: Todo) {
    const todos = this.getTodos();
    const updatedTodos = todos.filter(t => t.value !== todo.value);
    return this.saveTodos(updatedTodos);
  }

  createTodo(newTodo: string) {
    const todos = this.getTodos();
    const updatedTodos = [...todos, { completed: false, value: newTodo }];
    return this.saveTodos(updatedTodos);
  }

  private saveTodos(updatedTodos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return updatedTodos;
  }
}
