export class TodoService {
    getTodos() {
        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', '[]');
        }
        const localstorage = JSON.parse(localStorage.getItem('todos') || '');
        const todos = localstorage;
        return todos ? todos : [];
    }
    updateTodo(todo, index) {
        const todos = this.getTodos();
        todos[index] = todo;
        return this.saveTodos(todos);
    }
    deleteTodo(todo) {
        const todos = this.getTodos();
        const updatedTodos = todos.filter(t => t.value !== todo.value);
        return this.saveTodos(updatedTodos);
    }
    createTodo(newTodo) {
        const todos = this.getTodos();
        const updatedTodos = [...todos, { completed: false, value: newTodo }];
        return this.saveTodos(updatedTodos);
    }
    saveTodos(updatedTodos) {
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
    }
}
//# sourceMappingURL=todo.service.js.map