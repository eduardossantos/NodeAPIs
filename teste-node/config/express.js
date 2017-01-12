var express = require('express');
var load = require('express-load');


module.exports = function () {

    var app = express();

    app.set('view engine','ejs');
    app.set('views','./app/views')
// carrega tudo da pasta routes, depois tudo da pasta infra, restringindo a busca a partir da pasta app.
    load('routes',{cwd:'app'})
        .then('infra')
        .into(app);

    return app;

}



