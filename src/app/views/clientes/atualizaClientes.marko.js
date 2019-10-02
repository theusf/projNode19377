// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/clientes/atualizaClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/caminho/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">Projeto NODEJS</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Alterna navega��o\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\"><ul class=\"navbar-nav\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/login\">Acesso<span class=\"sr-only\">(P�gina atual)</span></a></li> <li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes\">ListagemClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/inclusaoCliente\">InclusaoClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/produtos\">ListagemProdutos</a></li></ul></div></nav><br><h1>Dados de um CLIENTE espec�fico</h1><br><br><header class=\"cabecalhoFundo\"></header><div><form action=\"/updateBDCliente\" method=\"post\"><main class=\"conteudoPrincipal\"><div class=\"tabelaAcesso\">");

  if (data.clientes.idClie) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.clientes.idClie) +
      "></div>");
  }

  out.w("<table class=\"table-mm\"><tr><td><label for=\"nome\">Nome:</label></td><td><input type=\"text\" id=\"nome\" name=\"nome\" size=\"40\"" +
    marko_attr("value", "" + data.clientes.nomeClie) +
    "></td></tr><tr><td><label for=\"data\">Aniversario:</label></td><td><input type=\"text\" id=\"niver\" name=\"niver\" size=\"10\"" +
    marko_attr("value", "" + data.clientes.dataNiverClie) +
    "></td></tr><tr><td><label for=\"email\">Email:</label></td><td><input type=\"text\" id=\"email\" name=\"email\" size=\"40\"" +
    marko_attr("value", "" + data.clientes.emailClie) +
    "></td></tr><tr><td><label for=\"cpf\">CPF:</label></td><td><input type=\"text\" id=\"cpf\" name=\"cpf\" size=\"11\"" +
    marko_attr("value", "" + data.clientes.cpfClie) +
    "></td></tr></table><br><input type=\"submit\" value=\"Atualizar Dados\" class=\"btn btn-secondary\"></div></main></form></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "57");

  out.w("</body><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/clientes/atualizaClientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
