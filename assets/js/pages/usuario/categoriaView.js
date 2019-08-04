// Criar Tabela De Listagem De Usuário
function criarTabelaCategorias(categorias) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaCategoria" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>CATEGORIA</th>
                </tr>
                </thead>
                <tbody id="categoriaRows">
                </tbody>
        </table>
    </div>
    `;

    $("#categoriaResult").html(table);

    for (let i in categorias){
        $("#categoriaRows").append(
        `<tr>
            <td>${categorias[i].id}</td>
            <td>${categorias[i].categoria}</td>
        </tr>`
        );
    }

    $('#tabelaCategoria').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Criar tabela com um usuário
function criarTabelaCategoria(categoria) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaCategoria" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>CATEGORIA</th>
                </tr>
                </thead>
                <tbody id="categoriaRows">
                ${
                `<tr>
                    <td>${categoria.id}</td>
                    <td>${categoria.categoria}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#categoriaResult").html(table);

    $('#tabelaCategoria').DataTable({
        "responsive": true
    });
}

// Criar tabela com um usuário p/ deletar
function criarTabelaCategoriaDel(categoria) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaCategoria" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>CATEGORIA</th>
                </tr>
                </thead>
                <tbody id="categoriaRows">
                ${
                `<tr>
                    <td>${categoria.id}</td>
                    <td>${categoria.categoria}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#categoriaResultDel").html(table);

    $('#tabelaCategoria').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Preencher Formulário de Alteração de Usuário
function preencherCategoriaAlt(categoria) {
    $("#nomeCategoriaAlt").val(categoria.categoria);
}

// Limpeza de formulários
function limparCategoriaAdd() {
    $("#nomeCategoriaAdd").val('');
}

function limparCategoriaDel() {
    $("#idCategoriaDel").val('');
    $("#categoriaResultDel").html('');
}

function limparCategoriaAlt() {
    $("#idCategoriaAlt").val('');
    $("#nomeCategoriaAlt").html('');
}
