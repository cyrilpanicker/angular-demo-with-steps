import {Component,OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo.service';

@Component({
    selector:'pending-todos',
    directives:[TodoComponent],
    providers:[TodoService],
    styles:[`
        li{
            cursor:pointer;
        }
    `],
    template:`
        <h2>Pending Todos</h2>
        <ul>
            <li
                *ngFor="let todo of todos"
                (click)="toggleTodo(todo)"
            >
                <span>{{todo.text}}</span>
                <button (click)="selectTodo(todo);$event.stopPropagation();" >Select</button>
            </li>
        </ul>
        <todo [todo]="selectedTodo" (toggle)="updateTodos()" ></todo>
    `
})
export class PendingComponent implements OnInit {
    todos:Todo[];
    selectedTodo:Todo;
    constructor(private todoService:TodoService){

    }
    updateTodos(){
        this.todos = this.todoService.getTodos().filter(todo => !todo.complete);
    }
    ngOnInit(){
        this.updateTodos();
        this.selectedTodo = this.todos[0];
    }
    toggleTodo(todo:Todo){
        todo.complete = !todo.complete;
        this.updateTodos();
    }
    selectTodo(todo:Todo){
        this.selectedTodo = todo;
    }
}