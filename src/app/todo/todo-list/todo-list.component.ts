import { Component, inject } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
   providers: [TodoService], 
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {

  private todoService = inject(TodoService);

  todos = this.todoService.getTodos();

  addTodo(name: string, content: string) {
    this.todoService.addTodo(new Todo(name, content));
    this.todoService.logTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
    this.todoService.logTodos();
  }
}