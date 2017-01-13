var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');


module.exports = function () {

    var app = express();

    app.set('view engine','ejs');
    app.set('views','./app/views')

    // Trata as requisições
    app.use(bodyParser.urlencoded({extended:true}));

    // carrega tudo da pasta routes, depois tudo da pasta infra, restringindo a busca a partir da pasta app.
    load('routes',{cwd:'app'})
        .then('infra')
        .into(app);

    return app;

}



