import {Todo} from './todo.model';
import {Component,OnInit} from '@angular/core';
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
        <button (click)="goBack()" >Back</button>
    `
})

export class TodoComponent implements OnInit {
    todo:Todo;
    constructor(
        private todoService:TodoService,
        private routeParams:RouteParams
    ){}
    ngOnInit(){
        this.todo = this.todoService.getTodos().find(todo=>{
            return todo.id === parseInt(this.routeParams.get('id'));
        });
    }
    goBack(){
        window.history.back();
    }
}