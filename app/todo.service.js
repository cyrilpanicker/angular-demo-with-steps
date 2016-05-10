"use strict";
var todos = [
    { id: 1, text: 'abc', complete: false },
    { id: 2, text: 'def', complete: false },
    { id: 3, text: 'ghi', complete: false },
    { id: 4, text: 'jkl', complete: false },
    { id: 5, text: 'mno', complete: false },
    { id: 6, text: 'pqr', complete: false },
    { id: 7, text: 'stu', complete: false },
    { id: 8, text: 'vwx', complete: false }
];
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.getTodos = function () {
        return todos;
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map