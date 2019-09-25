// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/clientes/listagemClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/caminho/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">Projeto NODEJS</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Alterna navegação\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\"><ul class=\"navbar-nav\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/login\">Acesso<span class=\"sr-only\">(Página atual)</span></a></li> <li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes\">ListagemClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/inclusaoCliente\">InclusaoClientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/consultaProd\">ConsultaProduto</a></li></ul></div></nav><br><h1>Listagem de CLIENTES</h1><br><br><div><table class=\"table\"><thead class=\"thead-dark\"><tr><th>ID</th><th>NOME</th><th>DATA ANIVERSARIO</th><th>EMAIL</th><th>CPF</th><th>ATUALIZAR</th><th>REMOVER</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forEach(data.clientes, function(cliente) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(cliente.idClie) +
      "</td><td>" +
      marko_escapeXml(cliente.nomeClie) +
      "</td><td>" +
      marko_escapeXml(cliente.dataNiverClie) +
      "</td><td>" +
      marko_escapeXml(cliente.emailClie) +
      "</td><td>" +
      marko_escapeXml(cliente.cpfClie) +
      "</td><td><i class=\"glyphicon glyphicon-edit\"></i>&nbsp&nbsp<a" +
      marko_attr("href", "/listaDadosClientes/" + cliente.idClie) +
      ">Editar</a></td><td><i class=\"glyphicon glyphicon-remove-circle\"></i>&nbsp&nbsp<a" +
      marko_attr("href", "/removeCliente/" + cliente.idClie) +
      ">Remover</a></td></tr>");
  });

  out.w("</tbody></table><script src=\"./removeCliente.js\"></script></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "54");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/clientes/listagemClientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
