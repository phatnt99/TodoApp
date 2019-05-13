var Todo = require("../models/todoModels");

module.exports = function(app) {
    app.get("/api/setup",function(req,res) {
        //setup gửi dữ liệu
        var seedTodo = [
            {
                text : "Học NodeJS",
                isDone: false
            },
            {
                text: "Học AngularJS",
                isDone: false
            },
            {
                text: "Viết ứng dụng",
                isDone: false
            }
        ];

        //gửi dữ liệu
        Todo.create(seedTodo,function(err,ret) {
            res.send(ret);
        });
    });
}