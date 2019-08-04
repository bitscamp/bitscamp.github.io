$("#buscarUsuario").on('click', function() {

    let idUsuario = $("#idUsuario").val();
    if (idUsuario != "") {
        $("#usuarioResult").html('');
        buscarUsuario(idUsuario);
    }
});

$("#buscarUsuariosAll").on('click', function() {

    buscarUsuariosAll();
});

$("#adicionarUsuario").on('click', function() {

    let usuario = {
        nome: $("#nomeUsuarioAdd").val(),
        email: $("#emailUsuarioAdd").val(),
        categoria: {
            id: $("#categoriaUsuarioAdd").val()
        },
        municipio: $("#municipioUsuarioAdd").val(),
        estado: {
            id: $("#estadoUsuarioAdd").val()
        },
        endereco: $("#enderecoUsuarioAdd").val(),
        cep: $("#cepUsuarioAdd").val(),
        perfil: {
            id: $("#perfilUsuarioAdd").val()
        },
        telefone: $("#telefoneUsuarioAdd").val()
    };

    let usuarioArray = new Array();
    usuarioArray.push(usuario);

    adicionarUsuario(JSON.stringify(usuario));
    
});

$("#alterarUsuario").on('click', function() {

    let usuario = {
        id: $("#idUsuarioAlt").val(),
        nome: $("#nomeUsuarioAlt").val(),
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

    let usuarioArray = new Array();
    usuarioArray.push(usuario);

    alterarUsuario(JSON.stringify(usuario));
    
});

$("#removerUsuario").on('click', function() {
    let idUsuarioDel = $("#idUsuarioDel").val();
    if (idUsuarioDel != ""){
        $("#idUsuarioDel").html('');
        removerUsuario(idUsuarioDel);
    }
});

$("#buscarUsuarioDel").on('click', function() {
    let idUsuarioDel = $("#idUsuarioDel").val();
    if (idUsuarioDel != "") {
        $("#usuarioResult").html('');
        buscarUsuarioDel(idUsuarioDel);
    }
});

$("#buscarUsuarioAlt").on('click', function() {
    let idUsuarioAlt = $("#idUsuarioAlt").val();
    if (idUsuarioAlt != ""){
        buscarUsuarioAlt(idUsuarioAlt);
        // $("#idUsuarioAlt").html('');
    }

});

$("#limparUsuarioAdd").on('click', function() {
    limparUsuarioAdd();
});

$("#limparUsuarioDel").on('click', function() {
    limparUsuarioDel();
});

$("#limparUsuarioAlt").on('click', function() {
    limparUsuarioAlt();
});

// FUNÇÃO QUE ORDENA POR GRUPO TABELA DE USUÁRIO
$('#usuarioRows').on( 'click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
        table.order( [ groupColumn, 'desc' ] ).draw();
    }
    else {
        table.order( [ groupColumn, 'asc' ] ).draw();
    }
} );