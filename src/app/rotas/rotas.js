var db = require('../../config/database');



const ClientesDAO = require('../BD/clientes_dao');


module.exports = (app) => {

 // Evitar problema com o CORS
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/', function(req, res){
        
    res.marko(
            require('../views/usuarios/index.marko'));
    }); 


    
app.get('/login', function(req, res){
        

    console.log('Fazendo validação do acesso');
    res.send('Espere ai que vou valida');

  });  




//abrir formulario de crientes
app.get('/clientes', function(req, res){
    const clienteDAO = new ClientesDAO(db);
    clienteDAO.listagemClientes(function (error,resultados)
    {
res.marko(
        require('../views/clientes/listagemClientes.marko'),
        {
            clientes: resultados
        }
    );
});
    
}); 

app.get('/inclusaoCliente', function(req, res){
    
res.marko(
        require('../views/clientes/inclusaoClientes.marko'));
}); 


  

} //end do modulo rotas
