import {Component} from '@angular/core';
import {Todo} from './todo.model';
import {TodoComponent} from './todo.component';

@Component({
    selector:'all-todos',
    directives:[TodoComponent],
    styles:[`
        li.complete span{
            text-decoration: line-through;
        }
        li{
            cursor:pointer;
        }
    `],
    template:`
        <h2>All Todos</h2>
        <ul>
            <li
                *ngFor="let todo of todos"
                (click)="toggleTodo(todo)"
                [class.complete]="todo.complete"
            >
                <span>{{todo.text}}</span>
                <button (click)="selectTodo(todo);$event.stopPropagation();" >Select</button>
            </li>
        </ul>
        <todo [todo]="selectedTodo" ></todo>
    `
})
export class AllTodosComponent{
    todos:Todo[]=[
        {id:1,text:'abc',complete:false},
        {id:2,text:'def',complete:false},
        {id:3,text:'ghi',complete:false},
        {id:4,text:'jkl',complete:false},
        {id:5,text:'mno',complete:false},
        {id:6,text:'pqr',complete:false},
        {id:7,text:'stu',complete:false},
        {id:8,text:'vwx',complete:false}
    ];
    selectedTodo = this.todos[0];
    toggleTodo(todo:Todo){
        todo.complete = !todo.complete;
    }
    selectTodo(todo:Todo){
        this.selectedTodo = todo;
    }
}