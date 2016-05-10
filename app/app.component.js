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
var allTodos_component_1 = require('./allTodos.component');
var pendingTodos_component_1 = require('./pendingTodos.component');
var todo_service_1 = require('./todo.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [router_deprecated_1.ROUTER_PROVIDERS, todo_service_1.TodoService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styles: ["\n        a{\n            color:black;\n        }\n        a.router-link-active{\n            color:blue;\n        }\n    "],
            template: "\n        <h2>Todo App</h2>\n        <a [routerLink]=\"['AllTodos']\" >All</a> \n        <a [routerLink]=\"['PendingTodos']\" >Pending</a>\n        <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { name: 'AllTodos', path: 'alltodos', component: allTodos_component_1.AllTodosComponent, useAsDefault: true },
            { name: 'PendingTodos', path: 'pendingtodos', component: pendingTodos_component_1.PendingComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map