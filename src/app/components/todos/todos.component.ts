import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // titles = "Not doing todos";
  todos: Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        content: '1st todo',
        completed: false
      },
      {
        content: '2nd todo',
        completed: true
      },
      {
        content: '3rd todo',
        completed: false
      }
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deletedTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }


}
