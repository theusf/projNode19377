const ProdutosDAO = require('../BD/produtos_dao');

//instancia db
var db = require('../../config/database');

class ProdutosControler
{

    listaProdutos(){
        return function(req, res){

            if(req.session.login) {
            const produtosDAO = new ProdutosDAO(db);
            produtosDAO.listagemProdutos(function (error,resultados)
            {
        res.marko(   
                require('../views/produtos/listagemProdutos.marko'),
                {
                    produtos: resultados
                    
                }
            );
        });
            
        }
        else {
            res.send("<h1>Primeiramente meu irmao faz login ai</h1>")
        }
    
    }}


}

module.exports = ProdutosControler;