class ClientesDAO 
{
  // construtor da classe
  constructor(db) 
  {
    this._db = db;
  }

  // método de SELECT  na tabela CLIENTES
  listagemClientes(callback) 
  {
    var sql =  'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES';
    console.log(sql);
    this._db.query(sql,
        (erro, resultados) =>
            callback(erro, resultados)
    )
  }


  incluiClientes(cliente) {
    return new Promise((resolve, reject) => {
      var sqlInsere = "INSERT INTO CLIENTES (nomeClie, cpfClie,dataNiverClie,emailClie) VALUES('" + cliente.nome + "','" + cliente.cpf + "','" + cliente.niver + "','" + cliente.email + "')";
      
      this._db.query(sqlInsere,
          function (erro) {
             if (erro) {
                 console.log(erro);
                 return reject('Inclusão do novo cliente NÃO foi concluída!');
             }
              resolve();
          }
      );
    });
  }


excluiClientes(id){
    return new Promise((resolve, reject) => {

        var sqlDel = "DELETE FROM CLIENTES WHERE idClie=" +id;
        console.log(sqlDel);
        
        this._db.query(sqlDel, function(erro) {
            if (erro) {
                console.log(erro)
                return reject ('Exclusao dos dados do clientes não concluida!')
            }
                resolve();

        })

    }
)


}


}  // end da classe
module.exports = ClientesDAO;