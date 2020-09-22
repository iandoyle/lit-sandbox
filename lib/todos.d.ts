import { LitElement } from 'lit-element';
import { TodoService } from './todo.service';
import { Todo } from './interfaces';
import './todo-item';
declare class XTodos extends LitElement {
    todos: Todo[];
    todoService: TodoService;
    constructor();
    render(): import("lit-element").TemplateResult;
    updateTodo(todo: Todo, index: number): void;
    deleteTodo(todo: Todo): void;
    createTodo(e: any): void;
}
export default XTodos;
