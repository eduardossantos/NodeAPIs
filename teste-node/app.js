// criando o servidor
var express = require('express');
var app = express();

// configurando as rotas
app.get('/produtos',function (request,response) {

    response.send("<html><body><h1>Listagem de Produtos</h1></body></html>")
});

//subindo o servidor
app.listen(3000,function () {
   console.log("Servidor rodando!");
});