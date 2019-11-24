const mysql = require('mysql');

let conexao = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123rvs',
    database:'db_vendas'
});
 

module.exports = conexao;
