// Função P/ Buscar Usuário Por Id
function buscarUsuario(email, result){
    if (email != null){
        $.ajax({
            url: Api + 'usuario/' + email,
            success: function (data) {
                result(data);
            },
            error: function () {
                swal("Erro :(", "Não foi possível buscar o Usuário: " + email, "error");
            }
        });
    } else {
        $.ajax({
            url: Api+'usuario',
            success: function(data){
                result(data);
            },
            error: function () {
                swal("Erro :(", "Não foi possível buscar os Usuários", "error");
            }
        });
    }
}


// Função p/ cadastrar Usuário
function adicionarUsuario(usuario) {
    $.ajax({
        method : 'POST',
        url :  Api+'usuario',
        contentType: 'application/json',
        data : usuario,
        success : function () {
            swal("Sucesso :)", "Usuário adicionado com sucesso.", "success");
            limparUsuarioAdd();
        },
        error: function () {
            swal("Erro :(", "Não foi possível adicionar o Usuário.", "error");
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
        success : function () {
            swal("Sucesso :)", "Usuário alterado com sucesso.", "success");
            limparUsuarioAlt();
        },
        error: function () {
            swal("Erro :(", "Não foi possível alterar o Usuário.", "error");
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerUsuario(email) {
    $.ajax({
        method : 'DELETE',
        url :  Api+'usuario/'+email,
        success : function () {
            swal("Sucesso :)", "Usuário Removido: "+email, "success");
            limparUsuarioDel();
        },
        error: function () {
            swal("Erro :(", "Não foi possível remover o Usuário: "+email, "error");
        }
    });
}

function preencherCategoriasUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'categoriaUsuario',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
        }
    });
}

function preencherPerfisUsuario(result) {
    return $.ajax({
        method : 'GET',
        url :  Api+'perfilCliente',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
        }
    });
}

function preencherEstadosUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'estado',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar as categorias: ", "warning");
        }
    });
}