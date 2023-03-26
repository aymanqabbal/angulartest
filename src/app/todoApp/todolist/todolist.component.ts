import {Component, ElementRef, ViewChild} from '@angular/core';
import {findIndex, retry} from "rxjs";
export interface Task{
  text:string,
  checked:boolean
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @ViewChild('todoInput') inputElement!: ElementRef;
  inputValue=''
  tasks:Task[]=[
    {text:"study",checked:false},
    {text:"eat",checked:false},
    {text:"workout",checked:false},
    {text:"buy groceries",checked:false},
]
addTask(text:string){
    text.length>0 && this.tasks.push({text,checked:false})
    this.inputElement.nativeElement.select()
}
updateValue(newValue:string){
    this.inputValue=newValue
}
removeTask(text:string){
  this.tasks=this.tasks.filter(tsk=>tsk.text!==text)
}
checkTask(text:string){
  this.tasks.forEach((tsk)=>{
    tsk.text===text && (tsk.checked= !tsk.checked)
  })
}

}
