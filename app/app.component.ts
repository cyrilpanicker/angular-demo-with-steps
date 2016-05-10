import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {AllTodosComponent} from './allTodos.component';
import {PendingComponent} from './pendingTodos.component';

@Component({
    selector:'app',
    template:`
        <h2>Todo App</h2>
    `
})
@RouteConfig([
    {name:'AllTodos',path:'alltodos',component:AllTodosComponent,useAsDefault:true},
    {name:'PendingTodos',path:'pendingtodos',component:PendingComponent}
])
export class AppComponent{
    
}