import {Component} from '@angular/core';
import {Todo} from './todo.model';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo.service';

@Component({
    selector:'all-todos',
    directives:[TodoComponent],
    providers:[TodoService],
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
    todos:Todo[];
    selectedTodo:Todo;
    private todoService:TodoService;
    constructor(todoService:TodoService){
        this.todoService = todoService;
        this.todos = this.todoService.getTodos();
        this.selectedTodo = this.todos[0];
    }
    toggleTodo(todo:Todo){
        todo.complete = !todo.complete;
    }
    selectTodo(todo:Todo){
        this.selectedTodo = todo;
    }
}