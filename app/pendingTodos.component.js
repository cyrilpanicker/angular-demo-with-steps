"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_component_1 = require('./todo.component');
var todo_service_1 = require('./todo.service');
var PendingComponent = (function () {
    function PendingComponent(todoService) {
        this.todoService = todoService;
    }
    PendingComponent.prototype.updateTodos = function () {
        this.todos = this.todoService.getTodos().filter(function (todo) { return !todo.complete; });
    };
    PendingComponent.prototype.ngOnInit = function () {
        this.updateTodos();
        this.selectedTodo = this.todos[0];
    };
    PendingComponent.prototype.toggleTodo = function (todo) {
        todo.complete = !todo.complete;
        this.updateTodos();
    };
    PendingComponent.prototype.selectTodo = function (todo) {
        this.selectedTodo = todo;
    };
    PendingComponent = __decorate([
        core_1.Component({
            selector: 'pending-todos',
            directives: [todo_component_1.TodoComponent],
            providers: [todo_service_1.TodoService],
            styles: ["\n        li{\n            cursor:pointer;\n        }\n    "],
            template: "\n        <h2>Pending Todos</h2>\n        <ul>\n            <li\n                *ngFor=\"let todo of todos\"\n                (click)=\"toggleTodo(todo)\"\n            >\n                <span>{{todo.text}}</span>\n                <button (click)=\"selectTodo(todo);$event.stopPropagation();\" >Select</button>\n            </li>\n        </ul>\n        <todo [todo]=\"selectedTodo\" ></todo>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], PendingComponent);
    return PendingComponent;
}());
exports.PendingComponent = PendingComponent;
//# sourceMappingURL=pendingTodos.component.js.map