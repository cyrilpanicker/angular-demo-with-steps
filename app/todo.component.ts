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
            Text : <input #inputTextBox [ngModel]="todo.text" (keyup)="updateText(inputTextBox.value)" /><br/>
            Complete : <input type="checkbox" [ngModel]="todo.complete" (change)="toggleTodo()" />
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