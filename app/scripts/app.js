angular.module("todoApp", [])
    .controller("MainCtrl", function($scope) {
        console.log("in Main controller..");

        $scope.todos = [];
        $scope.add = function() {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }
        $scope.delete = function(todo) {
            var indexOfTodo = $scope.todos.indexOf(todo);
            $scope.todos.splice(indexOfTodo, 1);
        }

        $scope.clearCompleted = function() {
            $scope.todos.forEach(function(todo) {

                if(todo.completed) {
                    $scope.delete(todo);
                }
             });
        }
    });
