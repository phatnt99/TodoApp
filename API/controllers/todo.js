var Todo = require("../models/todoModels");

function getListTodo(res) {
    Todo.find(function (err, ret) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json(ret);
        }
    })
}

module.exports = function (app) {
    //định nghĩa RESTful API

    //get list TODO
    app.get("/api/todos", function (req, res) {
        getListTodo(res);
    });

    app.get("/api/todo/:id", function (req, res) {
        Todo.findById({ _id: req.params.id }, function (err, ret) {
            if (err) {
                throw err;
            }
            else {
                res.json(ret);
            }
        })
    });

    //Create Todo
    app.post("/api/todo", function (req, res) {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todo.create(todo, function (err, ret) {
            if (err) {
                throw err;
            }
            else {
                getListTodo(res);
            }
        })
    });

    //Update todo
    app.put("/api/todo", function (req, res) {
        if (!req.body.id) {
            return res.status(500).send("Id required!");
        }
        else {
            Todo.update({ _id: req.body.id }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function (err, ret) {
                if (err) {
                    throw err;
                }
                else {
                    getListTodo(res);
                }

            })
        }
    });

    //Delete todo
    app.delete("/api/todo/:id", function(req, res) {
        Todo.remove({_id: req.params.id},function(err, ret) {
            if(err) {
                throw err;
            }
            else {
                getListTodo(res);
            }
        })
    });

}