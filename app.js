'use strict'

var express_ = require('express');
var bodyParser = require('body-parser');

var app = express_();

//cargar rutas
var fruta_routes = require('./routes/fruta');
//body-Parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas base
app.use('/api', fruta_routes);


module.exports = app;