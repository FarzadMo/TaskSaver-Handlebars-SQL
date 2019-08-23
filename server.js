var express = require ("express");
var mysql = require ("mysql");
var exphbs = require ("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "farzad1365",
    port: 3306,
    database: "task_saver_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("the connection id is: "+connection.threadId); 
});

app.get("/", function(req, res){

    connection.query("SELECT * FROM tasks;", function(err, data){
        if(err) throw err;
        console.log('My data is: ', data);
        res.render("index", {dataObj: data} );
    });
});

app.post("/", function(req, res){
    // var queryData = req.body.task;
    // console.log(queryData);
    // console.log("--------------------");

    connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, data){
        if(err) throw err;

        res.redirect("/");
    });
});

app.listen(PORT, function(){
    console.log("Server is connected on http://localhost/"+PORT);
});