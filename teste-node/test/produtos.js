var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function () {
    it('#listagem json',function (done) {
        request.get('/produtos')
            .set('Accept','application/json')
            .expect('Content-Type',/json/)
            .expect(200,done);
        });

    it('#Cadastro de novo produto',function (done) {

        request.post('/produtos')
            .send({nome:'Livro de teste'})
            .expect(302,done);
        
    })

});
