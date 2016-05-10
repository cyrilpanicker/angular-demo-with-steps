import {Component} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AllTodosComponent} from './allTodos.component';
import {PendingComponent} from './pendingTodos.component';
import {TodoService} from './todo.service';
import {TodoComponent} from './todo.component';

@Component({
    selector:'app',
    providers:[ROUTER_PROVIDERS,TodoService],
    directives:[ROUTER_DIRECTIVES],
    styles:[`
        a{
            color:black;
        }
        a.router-link-active{
            color:blue;
        }
    `],
    template:`
        <h2>Todo App</h2>
        <a [routerLink]="['AllTodos']" >All</a> 
        <a [routerLink]="['PendingTodos']" >Pending</a>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {name:'AllTodos',path:'alltodos',component:AllTodosComponent,useAsDefault:true},
    {name:'PendingTodos',path:'pendingtodos',component:PendingComponent}
    {name:'Todo',path:'todo/:id',component:TodoComponent}
])
export class AppComponent{
    
}