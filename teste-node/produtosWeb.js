var http = require('http');

var app = http.createServer(function (request,response) {

    if(request.url == "/produtos"){
        response.end("<html><body><h1>Listando os Produtos</h1></body></html>")
    }else {
        response.end("<html><body><h1>Home do Eduardo</h1></body></html>")
    }


});

app.listen(3000,"localhost");

console.log("Servidor Rodando!");