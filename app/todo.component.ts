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
            Text : <input [value]="todo.text" /><br/>
            Complete : <input type="checkbox" [checked]="todo.complete" />
        </div>
    `
})

export class TodoComponent{
    todo:Todo={
        id:1,
        text:'todo1',
        complete:false
    }
    constructor(){
        setTimeout(()=>this.todo.text='todo2',3000);
    }
}