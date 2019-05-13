var express = require("express");
var bodyparser = require("body-parser");
var morgan = require("morgan"); //log các request đến thay vì dùng middleware
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 3000; //set PORT

var config = require("./config");

var setup= require("./API/controllers/setup");
var todo = require("./API/controllers/todo");

//tạo middleware để truy cập public bằng assets và others
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.set("view engine", "ejs");

//cấu hình định tuyết (routed)
app.get("/",function(req, res) {
    res.render("index");
})

console.log(config.AccessDatabase());

mongoose.connect(config.AccessDatabase(), { useNewUrlParser: true, dbName: 'todoapp' });

setup(app);
todo(app);

app.listen(port, function() {
    console.log("App listening on port" + port);
})