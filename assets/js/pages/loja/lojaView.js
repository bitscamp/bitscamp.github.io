// Criar Tabela De Listagem De Loja
function criarTabelaLojas(loja) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaLoja" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>CNPJ</th>
                </tr>
                </thead>
                <tbody id="lojaRows">
                </tbody>
        </table>
    </div>
    `;

    $("#lojaResult").html(table);

    for (let i in loja){
        $("#lojaRows").append(
        `<tr>
            <td>${loja[i].id}</td>
            <td>${loja[i].nome}</td>
            <td>${loja[i].email}</td>
            <td>${loja[i].cnpj}</td>
        </tr>`
        );
    }

    $('#tabelaLoja').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Criar tabela com um loja
function criarTabelaLoja(loja) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaLoja" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>CNPJ</th>
                </tr>
                </thead>
                <tbody id="lojaRows">
                ${
                `<tr>
                    <td>${loja.id}</td>
                    <td>${loja.nome}</td>
                    <td>${loja.email}</td>
                    <td>${loja.cnpj}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#lojaResult").html(table);

    $('#tabelaLoja').DataTable({
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// Criar tabela com um loja p/ deletar
function criarTabelaLojaDel(loja) {
    let table = `
    <div class="col-md-12">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="tabelaLoja" width="100%">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>CNPJ</th>
                </tr>
                </thead>
                <tbody id="lojaRows">
                ${
                `<tr>
                    <td>${loja.id}</td>
                    <td>${loja.nome}</td>
                    <td>${loja.email}</td>
                    <td>${loja.cnpj}</td>
                </tr>`
                }
                </tbody>
        </table>
    </div>
    `;
    $("#lojaResultDel").html(table);

    $('#tabelaLoja').DataTable({
        "responsive": true
    });
}

// Preencher Formulário de Alteração de Loja
function preencherLojaAlt(loja) {

    $("#nomeLojaAlt").val(loja.nome);
    $("#emailLojaAlt").val(loja.email);
    $("#estadoLojaAlt").val(loja.estado.id);
    $("#cnpjLojaAlt").val(loja.cnpj);
    $("#municipioLojaAlt").val(loja.municipio);
    $("#enderecoLojaAlt").val(loja.endereco);
    $("#cepLojaAlt").val(loja.cep);
    $("#telefoneLojaAlt").val(loja.telefone);

}

// Limpeza de formulários
function limparLojaAdd() {

    $("#nomeLojaAdd").val('');
    $("#emailLojaAdd").val('');
    $("#estadoLojaAdd").val('');
    $("#cnpjLojaAdd").val();
    $("#municipioLojaAdd").val('');
    $("#enderecoLojaAdd").val('');
    $("#cepLojaAdd").val('');
    $("#telefoneLojaAdd").val('');
}

function limparLojaDel() {
    $("#idLojaDel").val('');
    $("#lojaResultDel").html('');
}

function limparLojaAlt() {

    $("#idLojaAlt").val('');
    $("#nomeLojaAlt").val('');
    $("#emailLojaAlt").val('');
    $("#estadoLojaAlt").val('');
    $("#cnpjLojaAlt").val();
    $("#municipioLojaAlt").val('');
    $("#enderecoLojaAlt").val('');
    $("#cepLojaAlt").val('');
    $("#telefoneLojaAlt").val('');
}