import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 title = 'first-demo';

    constructor() {
    }

  todoArray = [];

  status = false;

    addTodo(value: any) {
      this.todoArray.push(value);
      console.log(this.todos);
    }

  todos(todos: any) {
    throw new Error('Method not implemented.');
  }

}
