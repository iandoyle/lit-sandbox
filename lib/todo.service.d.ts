import { Todo } from "./interfaces";
export declare class TodoService {
    getTodos(): Todo[];
    updateTodo(todo: Todo, index: number): Todo[];
    deleteTodo(todo: Todo): Todo[];
    createTodo(newTodo: string): Todo[];
    private saveTodos;
}
