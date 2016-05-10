import {Todo} from './todo.model';
import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {TodoService} from './todo.service';

@Component({
    selector:'todo',
    template:`
        <h2>
            {{todo.text}} - 
            <span [hidden]="todo.complete" >pending</span>
            <span [hidden]="!todo.complete" >complete</span>
        </h2>
        <div>
            Text : <input [(ngModel)]="todo.text" /><br/>
            Complete : <input type="checkbox" [(ngModel)]="todo.complete"  />
        </div>
    `
})

export class TodoComponent{
    todo:Todo;
    constructor(
        private todoService:TodoService,
        private routeParams:RouteParams
    ){}
}