var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "You have sucessfully deployed a webapplication using docker }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " You made it!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
