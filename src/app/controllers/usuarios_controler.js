const UsuariosDAO = require('../BD/usuarios_dao');

var db = require('../../config/database');



class UsuariosControler
{

    exibeFormAcesso(){
        return function(req, res){
            
        res.marko(
                require('../views/usuarios/index.marko'));
        }

    }


    validaAcessoUsuario(){
        return function(req, res){
            
    
        console.log('Fazendo validação do acesso');
        //res.send('Espere ai que vou valida');
    
        const UsuarioDAO = new UsuariosDAO(db); //Instanciei a classe
        console.log('Login =' + req.body.login +" Senha"+ req.body.senha);
    
        UsuarioDAO.validaAcessoUsuario(req.body.login,req.body.senha)
        .then(
            dados => {
                if(dados>0){
                res.redirect('/clientes');
                }
            }       
    )
        .catch(erro => res.redirect('/'))
    
    
    
      }

    }

}

module.exports = UsuariosControler;