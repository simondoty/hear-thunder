require("node-jsx").install({ extension: ".jsx" });

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs  = require('express-handlebars');

//Express request pipeline
var app = express();

// set the template render engine
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

// attach middleware used by all routes
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());

// attach rinky-dinky routers
app.use("/", require("./controllers/indexController"));

// start serving
app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});