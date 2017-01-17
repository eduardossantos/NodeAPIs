var express = require('../config/express')();
var request = require('supertest')(express);

function limpaTabela() {
    var conn = express.infra.connectionFactory();
    conn.query("delete from livros",function (ex,result) {
        return ex;
    });

}
beforeEach(function (done) {
 var ex = limpaTabela();
 if(!ex){
     done();
 }

});
describe('#ProdutosController',function () {
    it('#listagem json',function (done) {
        request.get('/produtos')
            .expect('Content-Type',/json/)
            .expect(200,done);
        });

    it('#Cadastro de novo produto',function (done) {
        request.post('/produtos')
            .send({titulo:'Livro de teste',descricao:'Descricão de teste',preco:220.10 })
            .expect(302,done);
        
    })

});
