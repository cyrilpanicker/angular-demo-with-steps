import {Component} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AllTodosComponent} from './allTodos.component';
import {PendingComponent} from './pendingTodos.component';

@Component({
    selector:'app',
    directives:[ROUTER_DIRECTIVES],
    template:`
        <h2>Todo App</h2>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {name:'AllTodos',path:'alltodos',component:AllTodosComponent,useAsDefault:true},
    {name:'PendingTodos',path:'pendingtodos',component:PendingComponent}
])
export class AppComponent{
    
}