import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'
import {Todo} from './todo.model';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo.service';

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
    `
})
export class AllTodosComponent implements OnInit {
    todos:Todo[];
    constructor(
        private todoService:TodoService,
        private router:Router
    ){}
    ngOnInit(){
        this.todos = this.todoService.getTodos();
    }
    toggleTodo(todo:Todo){
        todo.complete = !todo.complete;
    }
    selectTodo(todo:Todo){
        this.router.navigate(['Todo',{id:todo.id}]);
    }
}