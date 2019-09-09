const URL = {
    ApiProd: 'https://bitscamp.herokuapp.com/',
    ApiDev: 'http://localhost:9000/'
};

const Api = URL.ApiDev;

$(".page-access").on('click', function(){
   let recurso = $(this).attr('id');
    getPage(recurso);
});

function getPage(id) {
    let url = window.location.origin;
    $.ajax({
        method : 'GET',
        url : Api+id,
        success : function (result) {
            location.href = result + ".html";
            // location.href = result;
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi acessar o recurso: '"+id+"'", "error");
            console.log(error);
        }
    });
}

function goHome() {
    getPage("");
}