module.exports = function (app) {
    app.get('/produtos',function (request,response) {

            //conexão
            var connection =   app.infra.connectionFactory(); // após o load, a invocação do método de conexão fica pelo path.
            var ProdutosDAO = new app.infra.ProdutosDAO(connection);
           //consulta
           ProdutosDAO.lista(function (err,result) {
            response.render('produtos/lista',{lista:result});

        });

        connection.end();



    });

}
