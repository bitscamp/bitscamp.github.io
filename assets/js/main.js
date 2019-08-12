const URL = {
    BACKEND: 'https://bitscamp.herokuapp.com/',
};

$(".page-access").on('click', function(){
   let recurso = $(this).attr('id');
    getPage(recurso);
});

function getPage(id) {
    let url = window.location.origin;
    $.ajax({
        method : 'GET',
        url : URL.BACKEND+id,
        success : function (result) {
            location.href = result;
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