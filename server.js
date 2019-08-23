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

















app.listen(PORT, function(){
    console.log("Server is connected on http://localhost/"+PORT);
});