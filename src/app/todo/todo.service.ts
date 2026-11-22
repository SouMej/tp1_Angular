import { Injectable, signal } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.update((todos) => [...todos, todo]);
  }

  deleteTodo(todo: Todo) {
    this.todos.update((todos) => todos.filter((t) => t !== todo));
  }

  logTodos() {
    console.log(this.todos());
  }
}