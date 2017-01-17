module.exports = function (app) {
    app.get('/',function (request, response) {
        var connection =   app.infra.connectionFactory(); // após o load, a invocação do método de conexão fica pelo path.
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.lista(function (err,result) {
        response.render('home/index',{livros:result})
        });
        connection.end();
    });
}
