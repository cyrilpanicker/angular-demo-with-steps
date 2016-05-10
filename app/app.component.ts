import {Component} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AllTodosComponent} from './allTodos.component';
import {PendingComponent} from './pendingTodos.component';
import {TodoService} from './todo.service';

@Component({
    selector:'app',
    providers:[ROUTER_PROVIDERS,TodoService],
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