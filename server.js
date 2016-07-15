// Require the Express Module
var express = require("express");
// Create an Express App
var app = express();
var mongoose = require('mongoose');


var express = require('express');
var app = express();
// Require path
var path = require("path");
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
app.use(bodyParser.urlencoded());
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, "./static")));
// Setting our Views Folder Directory

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})





















