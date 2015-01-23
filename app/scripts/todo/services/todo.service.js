/**
 * Created by vijayj on 1/23/2015.
 */
angular.module("todo")
    .service("TodoService", [function() {
        return {
            todos: [],
            add: function(newTodo) {
                this.todos.push(newTodo);
                //newTodo = {};
            },
            delete: function(todo) {
                var indexOfTodo = this.todos.indexOf(todo);
                this.todos.splice(indexOfTodo, 1);
            },
            clearCompleted: function() {
                var self = this;
                this.todos.forEach(function(todo) {
                    if(todo.completed) {
                        self.delete(todo);
                    }
                });
            }
        };
    }]);