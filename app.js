'use strict'

var express_ = require('express');

var bodyParser = require('body-parser');

var app = express_();

//cargar rutas

//body-Parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas

app.get('/',(req, res) => {
    res.status(200).send({
        message : 'Esta ruta funciona en APi'
    });
})

module.exports = app;