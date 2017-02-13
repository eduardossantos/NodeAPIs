var Promise = require('bluebird'), Mssql = require('mssql');


function conectaBD(){

	var config = {
	user : '',
	password : '',
	server : '',
	database: ''
	}

	return new Promise(function(resolve, reject){
		var conexaoBD = new Mssql.Connection(config);

		if(conexaoBD){
			resolve(conexaoBD.connect());
		} else {
			reject("Erro ao conectar com o banco de dados");
		}		
	})
}

function selectTable(queryBD){

	return new Promise(function(resolve, reject){

		conectaBD().then(function(conexao){
					var request = new Mssql.Request(conexao);

				    request.query(queryBD).then(function(recordset){
				    	resolve(recordset);
				    	conexao.close();
				    }).catch(function() {
				        reject("Não foi possível realizar a consulta");
				        conexao.close();				        
				    });
				 
				    

			}).catch(function(err) {
		        reject(err); 
		    });
		});
}

selectTable('SELECT TOP 5 * FROM TB_STAKEHOLDERS').then(function(resultado){
	console.log(resultado);
}).catch(function(Error){
	console.log(Error);
});