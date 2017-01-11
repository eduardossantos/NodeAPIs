module.exports = function (app) {

    app.get('/produtos',function (request,response) {

        var mysql = require('mysql');
        //conexão
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database: 'node'
        });
        //consulta
        connection.query("Select * from livros",function (err,result) {
            response.send(result);

        });



        connection.end();



    });

}
