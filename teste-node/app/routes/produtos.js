module.exports = function (app) {
    var listaProdutos = function (request,response) {
        //conexão
        var connection =   app.infra.connectionFactory(); // após o load, a invocação do método de conexão fica pelo path.
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        //consulta
        ProdutosDAO.lista(function (err,result) {
            response.render('produtos/lista',{lista:result});
        });
        connection.end();
    }
    app.get('/produtos',listaProdutos);

    app.get('/produtos/form',function (request,response) {

        response.render('produtos/form')
    });

    app.post('/produtos',function (request,response) {

        var produto = request.body;

        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.salva(produto,function (err,callback) {
            response.redirect('/produtos')

             });


    });

}
