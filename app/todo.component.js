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
var todo_model_1 = require('./todo.model');
var core_1 = require('@angular/core');
var TodoComponent = (function () {
    function TodoComponent() {
        this.toggle = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_model_1.Todo)
    ], TodoComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoComponent.prototype, "toggle", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "\n        <h2>\n            {{todo.text}} - \n            <span [hidden]=\"todo.complete\" >pending</span>\n            <span [hidden]=\"!todo.complete\" >complete</span>\n        </h2>\n        <div>\n            Text : <input [(ngModel)]=\"todo.text\" /><br/>\n            Complete : <input type=\"checkbox\" [(ngModel)]=\"todo.complete\" />\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map