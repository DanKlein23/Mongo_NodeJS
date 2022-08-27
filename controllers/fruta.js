'use strict'

const fruta = require('../models/fruta');
var Fruta = require('../models/fruta');

function pruebas(req, res) {
    res.status(200).send({
        message : 'Esta ruta funciona en APi'
    });
};


function saveFruta(req, res){
 var fruta = new Fruta();
 
 var params = req.body;

 if(params.nombre){
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;
        
        fruta.save((err, frutaStored) => {
            if(err){
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            }else{
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    });
                }else{
                    res.status(200).send({
                        message: 'No se ha guardado la fruta'
                    });
                }
            }
        }); 
    }else{
        res.status(200).send({
            message: 'El nombre de la Fruta es Obligatorio'
        });
    }
}

function getFrutas(req,res){
    Fruta.find({}).sort({'_id':-1}).exec((err, frutas) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutas){
                res.status(200).send({
                    frutas
                }); 
            }else{
                res.status(404).send({
                    message: 'No hay Frutas'
                });
            }
        }
    });
}

function getFruta(req, res){
    var frutaId =req.params.id;

    Fruta.findById(frutaId).exec((err, fruta) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(fruta){
                res.status(200).send({
                    fruta
                }); 
            }else{
                res.status(404).send({
                    message: 'No existe la Fruta'
                });
            }
        }
    });

}

function updateFruta(req, res){
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, {new:true}, (err, frutaUpdate) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutaUpdate){
                res.status(200).send({
                    fruta: frutaUpdate
                }); 
            }else{
                res.status(404).send({
                    message: 'No existe la Fruta'
                });
            }
        }
    });
}

function deleteFruta(req, res){
    var frutaId = req.params.id;
    
    Fruta.findByIdAndRemove(frutaId, (err, frutaRemove) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutaRemove){
                res.status(200).send({
                    fruta: frutaRemove
                }); 
            }else{
                res.status(404).send({
                    message: 'No existe la Fruta'
                });
            }
        }
    });

}


module.exports = {
pruebas,
saveFruta,
getFrutas,
getFruta,
updateFruta,
deleteFruta

};