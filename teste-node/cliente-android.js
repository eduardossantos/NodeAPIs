var http = require('http');

var configuracoes = {
    hostname:'localhost',
    port:3000,
    path: '/produtos'

};

http.get(configuracoes,function(response){
    console.log(response.statusCode);
    response.on('data',function (body){

        console.log('Corpo: '+body);
    });
});
