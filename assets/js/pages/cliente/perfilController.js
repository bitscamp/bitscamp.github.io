$("#buscarPerfisAll").on('click', function() {
    buscarPerfisAll();
});

$("#buscarPerfil").on('click', function() {

    let idPerfil = $("#idPerfil").val();
    if (idPerfil != "") {
        $("#idPerfil").val('');
        buscarPerfil(idPerfil);
    }
});

$("#adicionarPerfil").on('click', function() {

    let perfil = {
        perfilCliente: $("#nomePerfilAdd").val()
    };

    let perfilArray = new Array();
    perfilArray.push(perfil);

    adicionarPerfil(JSON.stringify(perfil));
    
});

$("#alterarPerfil").on('click', function() {

    let perfil = {
        id: $("#idPerfilAlt").val(),
        perfilCliente: $("#nomePerfilAlt").val()
    };

    let perfilArray = new Array();
    perfilArray.push(perfil);

    alterarPerfil(JSON.stringify(perfil));
    
});

$("#removerPerfil").on('click', function() {
    let idPerfilDel = $("#idPerfilDel").val();
    if (idPerfilDel != ""){
        $("#idPerfilDel").html('');
        removerPerfil(idPerfilDel);
    }
});

$("#buscarPerfilDel").on('click', function() {
    let idPerfilDel = $("#idPerfilDel").val();
    if (idPerfilDel != "") {
        $("#perfilResult").html('');
        buscarPerfilDel(idPerfilDel);
    }
});

$("#buscarPerfilAlt").on('click', function() {
    let idPerfilAlt = $("#idPerfilAlt").val();
    if (idPerfilAlt != ""){
        buscarPerfilAlt(idPerfilAlt);
        // $("#idPerfilAlt").html('');
    }

});

$("#limparPerfilAdd").on('click', function() {
    limparPerfilAdd();
});

$("#limparPerfilDel").on('click', function() {
    limparPerfilDel();
});

$("#limparPerfilAlt").on('click', function() {
    limparPerfilAlt();
});

// FUNÇÃO QUE ORDENA POR GRUPO TABELA DE USUÁRIO
$('#perfilRows').on( 'click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
        table.order( [ groupColumn, 'desc' ] ).draw();
    }
    else {
        table.order( [ groupColumn, 'asc' ] ).draw();
    }
} );