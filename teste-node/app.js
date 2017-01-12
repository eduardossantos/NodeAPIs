// criando o servidor
var app = require('./config/express')();
// configurando as rotas


//subindo o servidor
app.listen(3000,function () {
   console.log("Servidor rodando!");
});