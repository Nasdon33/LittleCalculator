var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/sum', function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    return x + y;
})

app.get('/multiply', function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    return x * y;
})

app.get('/subtraction', function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    return x - y;
})

app.get('/division', function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    if (y != 0)
        return x / y;
    else
        return "Impossibile dividere per 0";
})

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
})