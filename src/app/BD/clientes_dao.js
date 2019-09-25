class ClientesDAO {


    // Construtor da classe
    constructor(db)
    {
        this._db = db;
    }

    //método de SELECT na tabela CLIENTES

    // método de SELECT  na tabela CLIENTES
    listagemClientes(callback) 
    {
        var sql =  'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES';
        console.log(sql);
        this._db.query(
            sql,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }






} // End da Classe



module.exports = ClientesDAO;

