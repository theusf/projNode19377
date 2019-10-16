class ProdutosDAO 
{
  // construtor da classe
    constructor(db) 
    {
        this._db = db;
    }

    // método de SELECT  na tabela Produtos
    listagemProdutos(callback) 
    {
      var sql =  'SELECT idProd, descProd, idCatProd, descTecProd, valorProd, imgProd FROM PRODUTOS';
      console.log(sql);
      this._db.query(sql,
          (erro, resultados) =>
              callback(erro, resultados)
      )
    }
  

    
atualizaClientes(cliente) {
    return new Promise((resolve, reject) => {
        var sqlAtualiza = "UPDATE CLIENTES set nomeClie='" + cliente.nome +
            "', cpfClie='" + cliente.cpf +
            "', dataNiverClie='" + cliente.niver + "', emailClie='" +
            cliente.email + "' where idClie=" + cliente.id;
        console.log(sqlAtualiza);
        this._db.query(sqlAtualiza,
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Atualização dos dados do clientes NÃO foi concluída!');
                }
                resolve();
            }
        );
    });
}



}


module.exports = ProdutosDAO;