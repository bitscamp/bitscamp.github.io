$("#buscarLoja").on('click', function() {

    let idLoja = $("#idLoja").val();
    if (idLoja != "") {
        $("#lojaResult").html('');
        buscarLoja(idLoja);
    }
});

$("#buscarLojasAll").on('click', function() {

    buscarLojasAll();
});

$("#adicionarLoja").on('click', function() {

    let loja = {
        nome: $("#nomeLojaAdd").val(),
        email: $("#emailLojaAdd").val(),
        cnpj: $("#cnpjLojaAdd").val(),
        municipio: $("#municipioLojaAdd").val(),
        endereco: $("#enderecoLojaAdd").val(),
        estado: {
            id: $("#estadoLojaAdd").val()
        },
        cep: $("#cepLojaAdd").val(),
        telefone: $("#telefoneAdd").val()
    };

    let lojaArray = new Array();
    lojaArray.push(loja);

    adicionarLoja(JSON.stringify(loja));
    
});

$("#alterarLoja").on('click', function() {

    let loja = {
        id: $("#idLojaAlt").val(),
        nome: $("#nomeLojaAlt").val(),
        email: $("#emailLojaAlt").val(),
        cnpj: $("#cnpjLojaAlt").val(),
        municipio: $("#municipioLojaAlt").val(),
        endereco: $("#enderecoLojaAlt").val(),
        estado: {
            id: $("#estadoLojaAlt").val()
        },
        cep: $("#cepLojaAlt").val(),
        telefone: $("#telefoneLojaAlt").val()
    };

    let lojaArray = new Array();
    lojaArray.push(loja);

    alterarLoja(JSON.stringify(loja));
    
});

$("#removerLoja").on('click', function() {
    let idLojaDel = $("#idLojaDel").val();
    if (idLojaDel != ""){
        $("#idLojaDel").html('');
        removerLoja(idLojaDel);
    }
});

$("#buscarLojaDel").on('click', function() {
    let idLojaDel = $("#idLojaDel").val();
    if (idLojaDel != "") {
        $("#lojaResult").html('');
        buscarLojaDel(idLojaDel);
    }
});

$("#buscarLojaAlt").on('click', function() {
    let idLojaAlt = $("#idLojaAlt").val();
    if (idLojaAlt != ""){
        buscarLojaAlt(idLojaAlt);
        // $("#idLojaAlt").html('');
    }

});

$("#limparLojaAdd").on('click', function() {
    limparLojaAdd();
});

$("#limparLojaDel").on('click', function() {
    limparLojaDel();
});

$("#limparLojaAlt").on('click', function() {
    limparLojaAlt();
});

// FUNÇÃO QUE ORDENA POR GRUPO TABELA DE USUÁRIO
$('#lojaRows').on( 'click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
        table.order( [ groupColumn, 'desc' ] ).draw();
    }
    else {
        table.order( [ groupColumn, 'asc' ] ).draw();
    }
} );