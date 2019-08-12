// Função P/ Buscar Usuário Por Id
function buscarUsuario(idUsuario){
    $.ajax({
        method : 'GET',
        url :  URL.BACKEND+'usuario/'+idUsuario,
        success : function (result) {
            criarTabelaUsuario(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}

// Função P/ Buscar Todos os Usuários
function buscarUsuariosAll(){
    $.ajax({
        method : 'GET',
        url :  URL.BACKEND+'usuario',
        success : function (result) {
            $("#usuarioResult").html('');
            criarTabelaUsuarios(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar os usuário: ", "warning");
            console.log(error);
        }
    });
}

// Função p/ cadastrar usuário
function adicionarUsuario(usuario) {
    $.ajax({
        method : 'POST',
        url :  URL.BACKEND+'usuario',
        contentType: 'application/json',
        data : usuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário adicionado com sucesso.", "success");
            limparUsuarioAdd();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível adicionar o usuário.", "error");
            console.log(error);
        }
    });
};

// Função p/ alterar usuário
function alterarUsuario(usuario) {
    $.ajax({
        method : 'POST',
        url :  URL.BACKEND+'usuario',
        contentType: 'application/json',
        data : usuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário alterado com sucesso.", "success");
            limparUsuarioAlt();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível alterar o usuário.", "error");
            console.log(error);
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerUsuario(idUsuario) {
    $.ajax({
        method : 'DELETE',
        url :  URL.BACKEND+'usuario/'+idUsuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário Removido: "+idUsuario, "success");
            limparUsuarioDel();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível remover o usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}


// Função p/ buscar 1 usuário p/ alteração 
function buscarUsuarioAlt(idUsuario) {
    $.ajax({
        method : 'GET',
        url :  URL.BACKEND+'usuario/'+idUsuario,
        success : function (result) {
            preencherUsuarioAlt(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível encontrar o usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}

// Função p/ buscar 1 usuário p/ remover
function buscarUsuarioDel(idUsuarioDel){
    $.ajax({
        method : 'GET',
        url :  URL.BACKEND+'usuario/'+idUsuarioDel,
        success : function (result) {
            criarTabelaUsuarioDel(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o usuário: "+idUsuarioDel, "error");
            console.log(error);
        }
    });
}