'use strict'

var mongoose = require('mongoose');
var app = require('./app');
//app.createServer().listen(3800);
var port =3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mongo')
    .then(() => {
        console.log('La conexion a Mongo se ha realizado Correctamente!!');

        app.listen(port, () => {
            console.log('El servidor esta Corriendo en localhost 3800');
        });
    })
    .catch(err => console.log(err));
    