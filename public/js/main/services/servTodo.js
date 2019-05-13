var app = angular.module("app.todos");

app.factory("servTodo",["$http",function($http) {
    return {
        getTodo : function() {
            return $http.get("/api/todos");
        },
        createTodo : function(todoData) {
            return $http.post("/api/todo",todoData);
        },
        updateTodo : function(todoData) {
            return $http.put("/api/todo/",todoData);
        },
        deleteTodo : function(id) {
            return $http.delete("/api/todo/" + id); 
        }
    }
}])