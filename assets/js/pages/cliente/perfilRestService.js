// Função P/ Buscar Usuário Por Id
function buscarPerfil(idPerfil){
    $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente/'+idPerfil,
        success : function (result) {
            criarTabelaPerfil(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o perfil: "+idPerfil, "error");
            console.log(error);
        }
    });
}

// Função P/ Buscar Todos os Usuários
function buscarPerfisAll(){
    $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente',
        success : function (result) {
            $("#perfilResult").html('');
            criarTabelaPerfis(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar os perfis: ", "warning");
            console.log(error);
        }
    });
}

// Função p/ cadastrar Usuário
function adicionarPerfil(perfil) {
    $.ajax({
        method : 'POST',
        url :  Api+'perfilCliente',
        contentType: 'application/json',
        data : perfil,
        success : function (result) {
            swal("Sucesso :)", "Perfil adicionada com sucesso.", "success");
            limparPerfilAdd();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível adicionar o perfil.", "error");
            console.log(error);
        }
    });
};

// Função p/ alterar Usuário
function alterarPerfil(perfil) {
    $.ajax({
        method : 'POST',
        url :  Api+'perfilCliente',
        contentType: 'application/json',
        data : perfil,
        success : function (result) {
            swal("Sucesso :)", "Perfil alterada com sucesso.", "success");
            limparPerfilAlt();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível alterar o perfil.", "error");
            console.log(error);
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerPerfil(idPerfil) {
    $.ajax({
        method : 'DELETE',
        url :  Api+'perfilCliente/'+idPerfil,
        success : function (result) {
            swal("Sucesso :)", "Perfil Removida: "+idPerfil, "success");
            limparPerfilDel();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível remover o perfil: "+idPerfil, "error");
            console.log(error);
        }
    });
}


// Função p/ buscar 1 Usuário p/ alteração
function buscarPerfilAlt(idPerfil) {
    $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente/'+idPerfil,
        success : function (result) {
            preencherPerfilAlt(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível encontrar o perfil: "+idPerfil, "error");
            console.log(error);
        }
    });
}

// Função p/ buscar 1 Usuário p/ remover
function buscarPerfilDel(idPerfilDel){
    $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente/'+idPerfilDel,
        success : function (result) {
            criarTabelaPerfilDel(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o perfil: "+idPerfilDel, "error");
            console.log(error);
        }
    });
}