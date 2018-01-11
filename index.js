var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/sum', function (req, res) {
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    if (Number.isInteger(x) && Number.isInteger(y) )
    {
        return res.send({ value: x + y });
    }
    else
        {
            res.sendStatus(400);
        }
})

app.get('/multiply', function (req, res) {
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    if (Number.isInteger(x) && Number.isInteger(y) )
        return res.send({ value: x * y });
    else
    {
        res.sendStatus(400);
        return "Almeno uno degli input non è un numero intero";
    }
})

app.get('/subtract', function (req, res) {
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    if (Number.isInteger(x) && Number.isInteger(y) )
        return res.send({ value: x - y });
    else
    {
        res.sendStatus(400);
        return "Almeno uno degli input non è un numero intero";
    }
})

app.get('/divide', function (req, res) {
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    if (Number.isInteger(x) && Number.isInteger(y) )
    {
        if(y != 0)
            return res.send({ value: x / y });
        else
        {
            res.sendStatus(400);
            return "Impossibile dividere per 0";
        }
    }
    else
        {
            res.sendStatus(400);
            return "Almeno uno degli input non è un numero intero";
        }
})

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
})