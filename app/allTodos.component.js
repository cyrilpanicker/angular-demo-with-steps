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
var AllTodosComponent = (function () {
    function AllTodosComponent() {
        this.todos = [
            { id: 1, text: 'abc', complete: false },
            { id: 2, text: 'def', complete: false },
            { id: 3, text: 'ghi', complete: false },
            { id: 4, text: 'jkl', complete: false },
            { id: 5, text: 'mno', complete: false },
            { id: 6, text: 'pqr', complete: false },
            { id: 7, text: 'stu', complete: false },
            { id: 8, text: 'vwx', complete: false }
        ];
        this.selectedTodo = this.todos[0];
    }
    AllTodosComponent.prototype.toggleTodo = function (todo) {
        todo.complete = !todo.complete;
    };
    AllTodosComponent.prototype.selectTodo = function (todo) {
        this.selectedTodo = todo;
    };
    AllTodosComponent = __decorate([
        core_1.Component({
            selector: 'all-todos',
            template: "\n        <h2>All Todos</h2>\n        <ul>\n            <li\n                *ngFor=\"let todo of todos\"\n                (click)=\"toggleTodo(todo)\"\n                [class.complete]=\"todo.complete\"\n            >\n                <span>{{todo.text}}</span>\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AllTodosComponent);
    return AllTodosComponent;
}());
exports.AllTodosComponent = AllTodosComponent;
//# sourceMappingURL=allTodos.component.js.map