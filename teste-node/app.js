// criando o servidor
var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);
// configurando as rotas


//subindo o servidor
app.listen(3000,function () {
   console.log("Servidor rodando!");
});