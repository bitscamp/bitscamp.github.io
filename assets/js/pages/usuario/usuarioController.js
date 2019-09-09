$(document).ready(init);

function init() {

    preencherCategoriasUsuario(function (result) {
        preencherCategoriaUsuarioView(result);
    });
    preencherPerfisUsuario(function (result) {
        preencherPerfilUsuarioView(result);
    });
    preencherEstadosUsuario(function (result) {
        preencherEstadoUsuarioView(result);
    });

};

$("#buscaUsuariosAll").on('click', function() {
    $("#emailUsuarioTab").val(null);
    buscaUsuarioController($(this));
});

$("#buscaUsuario").on('click', function() {
    buscaUsuarioController($(this));
});

$("#buscaUsuarioDel").on('click', function() {
    buscaUsuarioController($(this));
});

$("#buscaUsuarioAlt").on('click', function() {
    buscaUsuarioController($(this));
});

$('a[data-toggle="tab"]').on('click', function () {
    limparUsuarioAlt();
    limparUsuarioDel();
    limparUsuarioResult();
});

$("#adicionarUsuario").on('click', function() {
    let usuario = {
        nome: $("#nomeUsuarioAdd").val(),
        email: $("#emailUsuarioAdd").val(),
        cpf: $("#cpfUsuarioAdd").val(),
        categoria: {
            id: $("#categoriaUsuarioAdd option:selected").val()
        },
        municipio: $("#municipioUsuarioAdd").val(),
        estado: {
            id: $("#estadoUsuarioAdd option:selected").val()
        },
        endereco: $("#enderecoUsuarioAdd").val(),
        cep: $("#cepUsuarioAdd").val(),
        perfil: {
            id: $("#perfilUsuarioAdd option:selected").val()
        },
        telefone: $("#telefoneUsuarioAdd").val()
    };

    adicionarUsuario(JSON.stringify(usuario));
});

$("#alterarUsuario").on('click', function() {
    let usuario = {
        id: $("#codigoUsuarioAlt").val(),
        nome: $("#nomeUsuarioAlt").val(),
        cpf: $("#cpfUsuarioAlt").val(),
        email: $("#emailUsuarioAlt").val(),
        categoria: {
            id: $("#categoriaUsuarioAlt").val()
        },
        municipio: $("#municipioUsuarioAlt").val(),
        estado: {
            id: $("#estadoUsuarioAlt").val()
        },
        endereco: $("#enderecoUsuarioAlt").val(),
        cep: $("#cepUsuarioAlt").val(),
        perfil: {
            id: $("#perfilUsuarioAlt").val()
        },
        telefone: $("#telefoneUsuarioAlt").val()
    };

    alterarUsuario(JSON.stringify(usuario));
});

$("#removerUsuario").on('click', function() {
    let emailUsuarioDel = $("#emailUsuarioDelTab").val();
    if (emailUsuarioDel != ""){
        $("#emailUsuarioDelTab").html('');
        removerUsuario(emailUsuarioDel);
    }
});

function buscaUsuarioController(data) {
    let email;
    let resultTab;

    if (data.attr("id") == "buscaUsuario" || data.attr("id") == "buscaUsuariosAll"){
        email = $("#emailUsuarioTab").val();
        resultTab = $("#usuarioResult");
    } else if (data.attr("id") == "buscaUsuarioDel"){
        email = $("#emailUsuarioDelTab").val();
        resultTab = $("#usuarioResultDel");
    } else if (data.attr("id") == "buscaUsuarioAlt"){
        email = $("#emailUsuarioAltTab").val();
    }

    buscarUsuario(email, function (result) {
        if (data.attr("id") == "buscaUsuarioAlt"){
            preencherUsuarioAlt(result);
        } else {
            criarTabelaUsuario(resultTab, result);
        }
    });
}