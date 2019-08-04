// Função P/ Buscar Usuário Por Id
function buscarCategoria(idCategoria){
    $.ajax({
        method : 'GET',
        url : '/categoriaUsuario/'+idCategoria,
        success : function (result) {
            criarTabelaCategoria(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar a categoria: "+idCategoria, "error");
            console.log(error);
        }
    });
}

// Função P/ Buscar Todos os Usuários
function buscarCategoriasAll(){
    $.ajax({
        method : 'GET',
        url : '/categoriaUsuario',
        success : function (result) {
            $("#categoriaResult").html('');
            criarTabelaCategorias(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
            console.log(error);
        }
    });
}

// Função p/ cadastrar usuário
function adicionarCategoria(categoria) {
    $.ajax({
        method : 'POST',
        url : '/categoriaUsuario',
        contentType: 'application/json',
        data : categoria,
        success : function (result) {
            swal("Sucesso :)", "Categoria adicionada com sucesso.", "success");
            limparCategoriaAdd();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível adicionar a categoria.", "error");
            console.log(error);
        }
    });
};

// Função p/ alterar usuário
function alterarCategoria(categoria) {
    $.ajax({
        method : 'POST',
        url : '/categoriaUsuario',
        contentType: 'application/json',
        data : categoria,
        success : function (result) {
            swal("Sucesso :)", "Categoria alterada com sucesso.", "success");
            limparCategoriaAlt();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível alterar a categoria.", "error");
            console.log(error);
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerCategoria(idCategoria) {
    $.ajax({
        method : 'DELETE',
        url : '/categoriaUsuario/'+idCategoria,
        success : function (result) {
            swal("Sucesso :)", "Categoria Removida: "+idCategoria, "success");
            limparCategoriaDel();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível remover a categoria: "+idCategoria, "error");
            console.log(error);
        }
    });
}


// Função p/ buscar 1 usuário p/ alteração 
function buscarCategoriaAlt(idCategoria) {
    $.ajax({
        method : 'GET',
        url : '/categoriaUsuario/'+idCategoria,
        success : function (result) {
            preencherCategoriaAlt(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível encontrar a categoria: "+idCategoria, "error");
            console.log(error);
        }
    });
}

// Função p/ buscar 1 usuário p/ remover
function buscarCategoriaDel(idCategoriaDel){
    $.ajax({
        method : 'GET',
        url : '/categoriaUsuario/'+idCategoriaDel,
        success : function (result) {
            criarTabelaCategoriaDel(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar a categoria: "+idCategoriaDel, "error");
            console.log(error);
        }
    });
}