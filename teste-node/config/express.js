var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {

    var app = express();
    app.use(express.static('./app/public'));
    app.set('view engine','ejs');
    app.set('views','./app/views');


    // Trata as requisições
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    // carrega tudo da pasta routes, depois tudo da pasta infra, restringindo a busca a partir da pasta app.
    load('routes',{cwd:'app'})
        .then('infra')
        .into(app);

    return app;

}



