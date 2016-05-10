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
var router_deprecated_1 = require('@angular/router-deprecated');
var todo_component_1 = require('./todo.component');
var todo_service_1 = require('./todo.service');
var AllTodosComponent = (function () {
    function AllTodosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    AllTodosComponent.prototype.ngOnInit = function () {
        this.todos = this.todoService.getTodos();
    };
    AllTodosComponent.prototype.toggleTodo = function (todo) {
        todo.complete = !todo.complete;
    };
    AllTodosComponent.prototype.selectTodo = function (todo) {
        this.router.navigate(['Todo', { id: todo.id }]);
    };
    AllTodosComponent = __decorate([
        core_1.Component({
            selector: 'all-todos',
            directives: [todo_component_1.TodoComponent],
            styles: ["\n        li.complete span{\n            text-decoration: line-through;\n        }\n        li{\n            cursor:pointer;\n        }\n    "],
            template: "\n        <h2>All Todos</h2>\n        <ul>\n            <li\n                *ngFor=\"let todo of todos\"\n                (click)=\"toggleTodo(todo)\"\n                [class.complete]=\"todo.complete\"\n            >\n                <span>{{todo.text}}</span>\n                <button (click)=\"selectTodo(todo);$event.stopPropagation();\" >Select</button>\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_deprecated_1.Router])
    ], AllTodosComponent);
    return AllTodosComponent;
}());
exports.AllTodosComponent = AllTodosComponent;
//# sourceMappingURL=allTodos.component.js.map