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
    
app.post('/acesso', function(req, res){
        

    console.log('Fazendo validação do acesso');
    res.send('Espere ai que vou valida');



    });  
  

} //end do modulo rotas
