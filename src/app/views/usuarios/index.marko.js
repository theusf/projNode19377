// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/usuarios/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/atalho/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoFundo\"><div><span class=\"logo\"><img src=\"/atalho/imagens/logotipo.gif\"></span><div class=\"cabecalhoTitulo\">Acesso a APLICAÇÃO</div></div> </header><form action=\"/acesso\" method=\"post\"><main class=\"conteudoPrincipal\"><div class=\"tabelaAcesso\"><table width=\"40%\"><tr><td><label for=\"email\">Email do Usuário:</label></td><td><input type=\"text\" id=\"email\" name=\"email\" size=\"30\"></td></tr><tr><td><label for=\"senha\">Senha do Usuário:</label></td><td><input type=\"password\" id=\"senha\" name=\"senha\" size=\"10\"></td></tr></table><br><input type=\"submit\" value=\"Validar Acesso\"></div></main></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/usuarios/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
