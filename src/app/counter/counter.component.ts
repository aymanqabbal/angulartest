import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 count=0;
 increment(){
   this.count++;
 }
 decrement(){
    this.count--;
  }
  set(val:string){
   let isNumber=Number(val)
   isNumber? this.count=isNumber:alert("please only enter a number")
  }
  reset(){
   this.count=0;
  }
}
