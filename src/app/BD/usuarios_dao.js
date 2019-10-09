class UsuariosDAO
{
    constructor(db) 
    {
      this._db = db;
    }

    validaAcessoUsuario(login,senha)
    {
            return new Promise((resolve, reject) => {

            console.log("Login da valida" + login);
            console.log("Senha da valida" + senha);

            
                var sqlCons = "SELECT * FROM USUARIOS WHERE loginUsr='" + login + "' and senhaUsr='" + senha + "'";
                console.log(sqlCons)
                
                this._db.query(sqlCons, function (erro,resultado) {
                    if (resultado.length >0)
                    {
                        var dados = resultado.length;
                        resolve(dados)
                    }
                    else {
                    
                           return reject('Erro da validação');
                       }
                        //resolve();
                    });
            
            
            });

    }





}


module.exports = UsuariosDAO;