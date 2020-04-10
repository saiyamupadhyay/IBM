import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/classes/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoService : TodoService) { }
  todos : Array<Todo> = [];
  ngOnInit(): void {
    this.todos=this.todoService.fetchTodos();

  }
  addTodo(todo:string){
    this.todos=this.todoService.addTodos(todo);
  }
  deleteTodo(index : number){
    this.todoService.deleteTodo(index);
  }

}
