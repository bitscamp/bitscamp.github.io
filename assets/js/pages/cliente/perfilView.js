// Criar Tabela De Listagem De Usuário
function criarTabelaPerfis(perfis) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaPerfil" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>PERFIL</th>
                </tr>
                </thead>
                <tbody id="perfilRows">
                </tbody>
        </table>
    </div>
    `;

    $("#perfilResult").html(table);

    for (let i in perfis){
        $("#perfilRows").append(
        `<tr>
            <td>${perfis[i].id}</td>
            <td>${perfis[i].perfilCliente}</td>
        </tr>`
        );
    }

    $('#tabelaPerfil').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Criar tabela com um usuário
function criarTabelaPerfil(perfil) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaPerfil" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>PERFIL</th>
                </tr>
                </thead>
                <tbody id="perfilRows">
                ${
                `<tr>
                    <td>${perfil.id}</td>
                    <td>${perfil.perfilCliente}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#perfilResult").html(table);

    $('#tabelaPerfil').DataTable({
        "responsive": true
    });
}

// Criar tabela com um usuário p/ deletar
function criarTabelaPerfilDel(perfil) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaPerfil" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>PERFIL</th>
                </tr>
                </thead>
                <tbody id="perfilRows">
                ${
                `<tr>
                    <td>${perfil.id}</td>
                    <td>${perfil.perfilCliente}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#perfilResultDel").html(table);

    $('#tabelaPerfil').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Preencher Formulário de Alteração de Usuário
function preencherPerfilAlt(perfil) {
    $("#nomePerfilAlt").val(perfil.perfilCliente);
}

// Limpeza de formulários
function limparPerfilAdd() {
    $("#nomePerfilAdd").val('');
}

function limparPerfilDel() {
    $("#idPerfilDel").val('');
    $("#perfilResultDel").html('');
}

function limparPerfilAlt() {
    $("#idPerfilAlt").val('');
    $("#nomePerfilAlt").html('');
}
