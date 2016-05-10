import {Todo} from './todo.model';
import {Component} from '@angular/core';

@Component({
    selector:'todo',
    template:`
        <h2>
            {{todo.text}} - 
            <span [hidden]="todo.complete" >pending</span>
            <span [hidden]="!todo.complete" >complete</span>
        </h2>
        <div>
            Text : <input [ngModel]="todo.text" (ngModelChange)="updateText($event)" /><br/>
            Complete : <input type="checkbox" [ngModel]="todo.complete" (ngModelChange)="toggleTodo()" />
        </div>
    `
})

export class TodoComponent{
    todo:Todo={
        id:1,
        text:'todo1',
        complete:false
    }
    toggleTodo(){
        this.todo.complete = !this.todo.complete;
    }
    updateText(text:string){
        this.todo.text = text;
    }
}