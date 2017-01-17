var mysql = require('mysql');

 var connectMYSQL = function() {
     if (!process.env.NODE_ENV) {
         return mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: '',
             database: 'node_Dev'
         });

     }else {
         return mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: '',
             database: 'node'
         });
     }
 };

//Wrapper
module.exports = function () {
    return connectMYSQL;

}