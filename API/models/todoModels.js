var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema( {
    text : String,
    isDone : Boolean,
})

var Todo = mongoose.model("Todo", todoSchema, "cat1");

module.exports = Todo;