// criando o servidor
var express = require('express');
var app = express();
app.set('view engine','ejs');
// configurando as rotas
app.get('/produtos',function (request,response) {

    response.render("produtos/lista")
});

//subindo o servidor
app.listen(3000,function () {
   console.log("Servidor rodando!");
});