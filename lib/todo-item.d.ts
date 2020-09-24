import { LitElement } from 'lit-element';
import { Todo } from './interfaces';
export declare class XTodoItem extends LitElement {
    constructor();
    todo: Todo;
    editing: boolean;
    render(): import("lit-element").TemplateResult;
    completeTodo(): void;
    deleteTodo(): void;
    editTodo(e: any): void;
    toggleForm(): void;
    private emitUpdate;
}
