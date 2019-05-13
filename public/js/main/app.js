var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'servTodo', function ($scope, servTodo) {

    $scope.appName = "Node Todo";
    $scope.todoList = [];
    $scope.loading = true;

    //load data from API
    servTodo.getTodo().success(function (data) {
        $scope.todoList = data;
        $scope.loading = false;
    })

    $scope.formData = {};

    $scope.createTodo = function () {
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        servTodo.createTodo(todo).success(function (data) {
            $scope.todoList = data;
            $scope.formData.text = "";
        })

    }

    $scope.updateTodo = function (todo) {
        var datar = {
            id : todo._id,
            text: todo.text,
            isDone : todo.isDone
        }
        servTodo.updateTodo(datar).success(function (data) {
           $scope.todoList = data;
        });
    }

    $scope.deleteTodo = function (todo) {
        servTodo.deleteTodo(todo._id).success(function(data){
            $scope.todoList = data;
        })
    }
}]);