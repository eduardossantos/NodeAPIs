module.exports = function (app) {
    var listaProdutos = function (request,response,next) {
        //conexão
        var connection =   app.infra.connectionFactory(); // após o load, a invocação do método de conexão fica pelo path.
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        //consulta
        ProdutosDAO.lista(function (err,result) {
            if(err){
                return next(err);
            }
            response.format({
                html:function () {
                    response.render('produtos/lista',{lista:result});
                },
                json: function () {
                    response.json(result);
                }
            });
        });

        connection.end();
    }
    app.get('/produtos',listaProdutos);

    app.get('/produtos/form',function (request,response) {

        response.render('produtos/form',{errorsValidation:{},produto:{}})
    });

    app.post('/produtos',function (request,response) {

        var produto = request.body;

        request.assert('titulo','O nome é obrigatório').notEmpty();
        request.assert('descricao','O nome é obrigatório').notEmpty();
        request.assert('preco','O nome é obrigatório').notEmpty();

        var errors =  request.validationErrors();
        if(errors){
            response.format({
                html:function () {
                    response.status(400).render('produtos/form',{errorsValidation:{},produto:{}});
                },
                json: function () {
                    response.status(400).json(errors);
                }
            });
        }

        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.salva(produto,function (err,callback) {
            response.redirect('/produtos')

             });


    });

}
