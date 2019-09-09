// Preencher Formulário de Alteração de Usuário
function preencherUsuarioAlt(usuario) {
    $("#codigoUsuarioAlt").val(usuario.id);
    $("#nomeUsuarioAlt").val(usuario.nome);
    $("#cpfUsuarioAlt").val(usuario.cpf);
    $("#emailUsuarioAlt").val(usuario.email);
    $("#estadoUsuarioAlt").val(usuario.estado.id);
    $("#categoriaUsuarioAlt").val(usuario.categoria.id);
    $("#municipioUsuarioAlt").val(usuario.municipio);
    $("#enderecoUsuarioAlt").val(usuario.endereco);
    $("#cepUsuarioAlt").val(usuario.cep);
    $("#perfilUsuarioAlt").val(usuario.perfil.id);
    $("#telefoneUsuarioAlt").val(usuario.telefone);

    $('#estadoUsuarioAlt').selectpicker('refresh');
    $('#categoriaUsuarioAlt').selectpicker('refresh');
    $('#perfilUsuarioAlt').selectpicker('refresh');

}

function limparUsuarioResult() {
    $("#usuarioResult").html('');
}

function limparUsuarioAlt() {
    $("#codigoUsuarioAlt").val('');
    $("#nomeUsuarioAlt").val('');
    $("#cpfUsuarioAlt").val('');
    $("#emailUsuarioAlt").val('');
    $("#estadoUsuarioAlt").val(0);
    $("#categoriaUsuarioAlt").val(0);
    $("#perfilUsuarioAlt").val(0);
    $("#municipioUsuarioAlt").val('');
    $("#enderecoUsuarioAlt").val('');
    $("#cepUsuarioAlt").val('');
    $("#telefoneUsuarioAlt").val('');

    $('#estadoUsuarioAlt').selectpicker('refresh');
    $('#categoriaUsuarioAlt').selectpicker('refresh');
    $('#perfilUsuarioAlt').selectpicker('refresh');
}

function limparUsuarioAdd() {
    $("#nomeUsuarioAdd").val('');
    $("#cpfUsuarioAdd").val('');
    $("#emailUsuarioAdd").val('');
    $("#estadoUsuarioAdd").val(0);
    $("#categoriaUsuarioAdd").val(0);
    $("#perfilUsuarioAdd").val(0);
    $("#municipioUsuarioAdd").val('');
    $("#enderecoUsuarioAdd").val('');
    $("#cepUsuarioAdd").val('');
    $("#telefoneUsuarioAdd").val('');

    $('#estadoUsuarioAdd').selectpicker('refresh');
    $('#categoriaUsuarioAdd').selectpicker('refresh');
    $('#perfilUsuarioAdd').selectpicker('refresh');
}

function limparUsuarioDel() {
    $("#idUsuarioDel").val('');
    $("#usuarioResultDel").html('');
}

function preencherCategoriaUsuarioView(categoria) {
    $("#categoriaUsuarioAdd").empty();
    $("#categoriaUsuarioAdd").append(`<option selected="selected" value="0">Selecione uma Categoria</option>`);
    $.each(categoria, function (key, value) {
        $("#categoriaUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.categoria));
    });

    $("#categoriaUsuarioAlt").empty();
    $("#categoriaUsuarioAlt").append(`<option selected="selected" value="0">Selecione uma Categoria</option>`);
    $.each(categoria, function (key, value) {
        $("#categoriaUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.categoria));
    });

    $('#categoriaUsuarioAdd').selectpicker('refresh');
    $('#categoriaUsuarioAlt').selectpicker('refresh');
}

function preencherPerfilUsuarioView(perfil) {
    $("#perfilUsuarioAdd").empty();
    $("#perfilUsuarioAdd").append(`<option selected="selected" value="0">Selecione um Perfil</option>`);
    $.each(perfil, function (key, value) {
        $("#perfilUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.perfilCliente))
    });

    $("#perfilUsuarioAlt").empty();
    $("#perfilUsuarioAlt").append(`<option selected="selected" value="0">Selecione um Perfil</option>`);
    $.each(perfil, function (key, value) {
        $("#perfilUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.perfilCliente))
    });

    $('#perfilUsuarioAdd').selectpicker('refresh');
    $('#perfilUsuarioAlt').selectpicker('refresh');
}

function preencherEstadoUsuarioView(perfil) {
    $("#estadoUsuarioAdd").empty();
    $("#estadoUsuarioAdd").append(`<option selected="selected" value="0">Selecione um Estado</option>`);
    $.each(perfil, function (key, value) {
        $("#estadoUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.estado))
    });

    $("#estadoUsuarioAlt").empty();
    $("#estadoUsuarioAlt").append(`<option selected="selected" value="0">Selecione um Estado</option>`);
    $.each(perfil, function (key, value) {
        $("#estadoUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.estado))
    });

    $('#estadoUsuarioAdd').selectpicker('refresh');
    $('#estadoUsuarioAlt').selectpicker('refresh');
}

// Criar Tabela De Listagem De Usuário
function criarTabelaUsuario(resultTab, usuario) {
    let table = `
    <div class="col-md-12">
        <table class="table table-striped table-bordered" id="tabelaUsuario">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>FUNÇÃO</th>
                </tr>
                </thead>
                <tbody id="usuarioRows">
                </tbody>
        </table>
    </div>
    `;

    $(resultTab).html(table);

    let usuarios = usuario;
    if (!Array.isArray(usuarios)) {
        usuarios = [usuario];
    }

    for (let i in usuarios){
        $("#usuarioRows").append(
            `<tr>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].nome}</td>
            <td>${usuarios[i].email}</td>
            <td>${usuarios[i].categoria.categoria}</td>
        </tr>`
        );
    }

    $('#tabelaUsuario').DataTable({
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
        },
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

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
