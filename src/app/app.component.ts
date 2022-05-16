import { Component } from "@angular/core";
import { Todo } from "./Todo";
/* import { HttpClient } from "@angular/common/http"; */

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /*   public http: HttpClient; */
  todos: Todo[] = [];
  newTodo: string;
  valueEdit: string;

  /*  requestJsonServer(name: string, id?: number) {
    const url = "http://localhost/3000/todos";
    const body = {
      name,
      id,
    };
   
    return this.http.post(url, body);
  } */

  enterKeyAddTodo(_data: any) {
    this.saveTodo()
  }

  saveTodo(event?: HTMLFormElement) {
    console.log(event);
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;

      this.newTodo.length && this.todos.push(todo);
      /*  this.requestJsonServer(todo.name); */
      this.newTodo = "";
    } else {
      alert("Please Enter Todo");
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number) {
    this.todos.splice(id, 1);
  }

  toEdit(id: number) {
    this.valueEdit = prompt("Edit task");
    this.todos[id].name = this.valueEdit;
  }
}
