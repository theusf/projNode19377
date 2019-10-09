var db = require('../../config/database');

const ClienteControlador = require('../controllers/clientes_controler');
const clienteCont = new ClienteControlador();

const UsuarioControlador = require('../controllers/usuarios_controler');
const usuarioCont = new UsuarioControlador();



module.exports = (app) => {

 // Evitar problema com o CORS
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/', usuarioCont.exibeFormAcesso()); 

    
app.post('/validaBDUsuarios', usuarioCont.validaAcessoUsuario());  

//abrir formulario de crientes
app.get('/clientes', clienteCont.listaClientes()   ); 

app.get('/inclusaoCliente', clienteCont.exibeForminclusaoNovoCliente() ); 


app.post('/insertBDClientes', clienteCont.insereNovoCliente() );


app.get('/removeCliente/:id',clienteCont.excluiCliente())


app.post('/updateBDCliente', clienteCont.atualizaDadosCliente());

// abre o formulario atualizaClientes.marko
app.get('/listaDadosClientes/:id', clienteCont.listaClientes());


} //end do modulo rotas
