// colocar/instanciar todos pacotes que usarei no projeto /

require('marko/node-require').install(); // não precisa colocar const porque o marko já está dentro do pacote instanciado express
require('marko/express') ;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// indicando um caminho de diretorio
app.use('/atalho', express.static('src/app/views'))


const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;