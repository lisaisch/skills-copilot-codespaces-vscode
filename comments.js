// Create web server
var express = require('express');
var app = express();
var fs = require("fs");

// Get comments
app.get('/comments', function (req, res) {
    fs.readFile( __dirname + "/data/" + "comments.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

// Add comments
app.post('/comments', function (req, res) {
    // First read existing comments.
    fs.readFile( __dirname + "/data/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["comment4"] = comment4;
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Delete comments
app.delete('/comments', function (req, res) {
    // First read existing comments.
    fs.readFile( __dirname + "/data/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["comment2"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})