import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../todolist/todolist.component";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

@Input() task!:Task;
@Output() removeEvent=new EventEmitter<string>;
@Output() checkEvent=new EventEmitter<string>;

  inputClass:any

  remove(value:string){
    this.removeEvent.emit(value)
  }
  check(value:string){
    this.checkEvent.emit(value)
  }

}
