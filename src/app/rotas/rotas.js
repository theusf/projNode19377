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


/*app.get('/insertBDClientes', function(req, res){
    
    
}); */

app.post('/insertBDClientes', function(req,res){

    const clienteDAO = new ClientesDAO(db);
    clienteDAO.incluiClientes(req.body)
    .then(res.redirect('/clientes'))
    .catch(erro => console.log(erro))


})


app.get('/removeCliente/:id', function(req,res)
{

const idDoCliente = req.params.id;
const clienteDAO = new ClientesDAO(db);
clienteDAO.excluiClientes(idDoCliente)
.then(res.redirect('/Clientes'))
.catch(erro => console.log(erro))

})


app.post('/updateBDCliente', function(req,res){
    
        const clienteDAO = new ClientesDAO(db);
        clienteDAO.atualizaClientes(req.body)
        .then(res.redirect('/clientes'))
        .catch(erro => console.log(erro))
    
    })

// abre o formulario atualizaClientes.marko
app.get('/listaDadosClientes/:id', function (req, res) {
    const idDoCliente = req.params.id;
    const clienteDAO = new ClientesDAO(db);
    clienteDAO.consultaClientePorId(idDoCliente, function (error, resultadosClientes) 
    {
        console.log(resultadosClientes);
        res.marko(
            require('../views/clientes/atualizaClientes.marko'),
            { clientes: resultadosClientes[0] }
        );
    });
});




  

} //end do modulo rotas
