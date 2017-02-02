var express = require('express');
var app = express();

app.set('view engine','ejs');
/*Rotas*/
app.get('/consultas',function (request,response) {

    response.render("consultas/lista");
});

/*Subindo servidor*/
app.listen(8088,function () {
    console.log("Servidor rodando");
});

