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
var todo_service_1 = require('./todo.service');
var TodoComponent = (function () {
    function TodoComponent(todoService, routeParams) {
        this.todoService = todoService;
        this.routeParams = routeParams;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todo = this.todoService.getTodos().find(function (todo) {
            return todo.id === parseInt(_this.routeParams.get('id'));
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "\n        <h2>\n            {{todo.text}} - \n            <span [hidden]=\"todo.complete\" >pending</span>\n            <span [hidden]=\"!todo.complete\" >complete</span>\n        </h2>\n        <div>\n            Text : <input [(ngModel)]=\"todo.text\" /><br/>\n            Complete : <input type=\"checkbox\" [(ngModel)]=\"todo.complete\"  />\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_deprecated_1.RouteParams])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map