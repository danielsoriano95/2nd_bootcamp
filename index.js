//1)requerimos los paquetes necesarios
var express= require('express');
var app=express();
var bodyParser = require("body-parser");

//1.1) configuraciones
app.use(bodyParser.urlencoded({extended:true}));

// 2) Rutas
app.get('/prueba', function(req, res){
    res.send("Hola mundo");
})

//3) listen
app.listen(4000, function(){
    console.log("servidor iniciado");
})
