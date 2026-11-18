import { Component } from '@angular/core';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';

@Component({
  selector: 'app-week-todo',
  imports: [TodoListComponent],
  templateUrl: './week-todo.component.html',
  styleUrl: './week-todo.component.css',
})
export class WeekTodoComponent {
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}