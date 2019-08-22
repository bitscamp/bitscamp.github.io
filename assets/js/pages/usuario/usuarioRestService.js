// Função P/ Buscar Usuário Por Id
function buscarUsuario(idUsuario){
    $.ajax({
        method : 'GET',
        url :  Api+'usuario/'+idUsuario,
        success : function (result) {
            criarTabelaUsuario(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o Usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}

// Função P/ Buscar Todos os Usuários
function buscarUsuariosAll(){
    $.ajax({
        method : 'GET',
        url :  Api+'usuario',
        success : function (result) {
            $("#usuarioResult").html('');
            criarTabelaUsuarios(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar os Usuário: ", "warning");
            console.log(error);
        }
    });
}

// Função p/ cadastrar Usuário
function adicionarUsuario(usuario) {
    $.ajax({
        method : 'POST',
        url :  Api+'usuario',
        contentType: 'application/json',
        data : usuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário adicionado com sucesso.", "success");
            limparUsuarioAdd();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível adicionar o Usuário.", "error");
            console.log(error);
        }
    });
};

// Função p/ alterar Usuário
function alterarUsuario(usuario) {
    $.ajax({
        method : 'POST',
        url :  Api+'usuario',
        contentType: 'application/json',
        data : usuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário alterado com sucesso.", "success");
            limparUsuarioAlt();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível alterar o Usuário.", "error");
            console.log(error);
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerUsuario(idUsuario) {
    $.ajax({
        method : 'DELETE',
        url :  Api+'usuario/'+idUsuario,
        success : function (result) {
            swal("Sucesso :)", "Usuário Removido: "+idUsuario, "success");
            limparUsuarioDel();
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível remover o Usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}


// Função p/ buscar 1 Usuário p/ alteração
function buscarUsuarioAlt(idUsuario) {
    $.ajax({
        method : 'GET',
        url :  Api+'usuario/'+idUsuario,
        success : function (result) {
            preencherUsuarioAlt(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível encontrar o Usuário: "+idUsuario, "error");
            console.log(error);
        }
    });
}

// Função p/ buscar 1 Usuário p/ remover
function buscarUsuarioDel(idUsuarioDel){
    $.ajax({
        method : 'GET',
        url :  Api+'usuario/'+idUsuarioDel,
        success : function (result) {
            criarTabelaUsuarioDel(result);
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar o Usuário: "+idUsuarioDel, "error");
            console.log(error);
        }
    });
}

function buscarCategoriaUsuario() {
    $.ajax({
        method : 'GET',
        url :  Api+'categoriaUsuario',
        success : function (result) {
            preencherCategoriaAdd(result)
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
            console.log(error);
        }
    });
}

function buscarPerfilUsuario() {
    $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente',
        success : function (result) {
            preencherPerfilAdd(result)
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
            console.log(error);
        }
    });
}