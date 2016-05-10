"use strict";
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
    return AllTodosComponent;
}());
exports.AllTodosComponent = AllTodosComponent;
//# sourceMappingURL=allTodos.component.js.map