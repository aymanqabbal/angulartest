import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistComponent } from './todoApp/todolist/todolist.component';
import { TodoItemComponent } from './todoApp/todo-item/todo-item.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'counter',component:CounterComponent},
  {path:'todolist',component:TodolistComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    NavbarComponent,
    TodolistComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
