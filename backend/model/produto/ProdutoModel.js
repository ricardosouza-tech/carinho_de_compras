const db = require('../../banco/dbConexao');


module.exports = class ProdutoModel{
  
    static  getTodos(callback){
        return db.query("SELECT * FROM produtos", callback);
    }

    static  getId(id, callback){
        return db.query("SELECT * FROM produtos WHERE id_produto = ?",
        [id], callback);
    }
}

