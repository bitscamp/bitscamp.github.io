$("#buscarCategoriasAll").on('click', function() {
    buscarCategoriasAll();
});

$("#buscarCategoria").on('click', function() {

    let idCategoria = $("#idCategoria").val();
    if (idCategoria != "") {
        $("#idCategoria").val('');
        buscarCategoria(idCategoria);
    }
});

$("#adicionarCategoria").on('click', function() {

    let categoria = {
        categoria: $("#nomeCategoriaAdd").val()
    };

    let categoriaArray = new Array();
    categoriaArray.push(categoria);

    adicionarCategoria(JSON.stringify(categoria));
    
});

$("#alterarCategoria").on('click', function() {

    let categoria = {
        id: $("#idCategoriaAlt").val(),
        categoria: $("#nomeCategoriaAlt").val()
    };

    let categoriaArray = new Array();
    categoriaArray.push(categoria);

    alterarCategoria(JSON.stringify(categoria));
    
});

$("#removerCategoria").on('click', function() {
    let idCategoriaDel = $("#idCategoriaDel").val();
    if (idCategoriaDel != ""){
        $("#idCategoriaDel").html('');
        removerCategoria(idCategoriaDel);
    }
});

$("#buscarCategoriaDel").on('click', function() {
    let idCategoriaDel = $("#idCategoriaDel").val();
    if (idCategoriaDel != "") {
        $("#categoriaResult").html('');
        buscarCategoriaDel(idCategoriaDel);
    }
});

$("#buscarCategoriaAlt").on('click', function() {
    let idCategoriaAlt = $("#idCategoriaAlt").val();
    if (idCategoriaAlt != ""){
        buscarCategoriaAlt(idCategoriaAlt);
        // $("#idCategoriaAlt").html('');
    }

});

$("#limparCategoriaAdd").on('click', function() {
    limparCategoriaAdd();
});

$("#limparCategoriaDel").on('click', function() {
    limparCategoriaDel();
});

$("#limparCategoriaAlt").on('click', function() {
    limparCategoriaAlt();
});

// FUNÇÃO QUE ORDENA POR GRUPO TABELA DE USUÁRIO
$('#categoriaRows').on( 'click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
        table.order( [ groupColumn, 'desc' ] ).draw();
    }
    else {
        table.order( [ groupColumn, 'asc' ] ).draw();
    }
} );