import {Todo} from './todo.model';
import {Component,Input,Output,EventEmitter} from '@angular/core';

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
            Complete : <input type="checkbox" [ngModel]="todo.complete" (ngModelChange)="toggleTodo($event)" />
        </div>
    `
})

export class TodoComponent{
    @Input() todo:Todo;
    @Output() toggle = new EventEmitter();
    toggleTodo(complete){
        this.todo.complete = complete;
        this.toggle.emit({});
    }
}