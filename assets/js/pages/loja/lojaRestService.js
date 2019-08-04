// Função P/ Buscar Loja Por Id
function buscarLoja(idLoja){
    $.ajax({
        method : 'GET',
        url : '/lojaParceira/'+idLoja,
        success : function (result) {
            criarTabelaLoja(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o loja: "+idLoja, "error");
            console.log(error);
        }
    });
}

// Função P/ Buscar Todos os Lojas
function buscarLojasAll(){
    $.ajax({
        method : 'GET',
        url : '/lojaParceira',
        success : function (result) {
            $("#lojaResult").html('');
            criarTabelaLojas(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar as lojas.", "warning");
            console.log(error);
        }
    });
}

// Função p/ cadastrar loja
function adicionarLoja(loja) {
    $.ajax({
        method : 'POST',
        url : '/lojaParceira',
        contentType: 'application/json',
        data : loja,
        success : function (result) {
            swal("Sucesso :)", "Loja adicionado com sucesso.", "success");
            limparLojaAdd();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível adicionar o loja.", "error");
            console.log(error);
        }
    });
};

// Função p/ alterar loja
function alterarLoja(loja) {
    $.ajax({
        method : 'POST',
        url : '/lojaParceira',
        contentType: 'application/json',
        data : loja,
        success : function (result) {
            swal("Sucesso :)", "Loja alterado com sucesso.", "success");
            limparLojaAlt();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível alterar o loja.", "error");
            console.log(error);
        }
    });
};

// Função P/ Remover Loja Por Id
function removerLoja(idLoja) {
    $.ajax({
        method : 'DELETE',
        url : '/lojaParceira/'+idLoja,
        success : function (result) {
            swal("Sucesso :)", "Loja Removido: "+idLoja, "success");
            limparLojaDel();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível remover o loja: "+idLoja, "error");
            console.log(error);
        }
    });
}


// Função p/ buscar 1 loja p/ alteração 
function buscarLojaAlt(idLoja) {
    $.ajax({
        method : 'GET',
        url : '/lojaParceira/'+idLoja,
        success : function (result) {
            preencherLojaAlt(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível encontrar o loja: "+idLoja, "error");
            console.log(error);
        }
    });
}

// Função p/ buscar 1 loja p/ remover
function buscarLojaDel(idLojaDel){
    $.ajax({
        method : 'GET',
        url : '/lojaParceira/'+idLojaDel,
        success : function (result) {
            criarTabelaLojaDel(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o loja: "+idLojaDel, "error");
            console.log(error);
        }
    });
}