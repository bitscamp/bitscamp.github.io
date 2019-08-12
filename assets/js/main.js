$(".page-access").on('click', function(){
   let recurso = $(this).attr('id');
    getApi(recurso);
});

function getApi(id) {
    let url = window.location.origin;
    $.ajax({
        method : 'GET',
        url : 'https://bitscamp.herokuapp.com/'+id,
        success : function (result) {
            location.href = result+id;
            console.log(result);
        },
        error: function (error) {
            swal("Erro :(", "Não foi acessar o recurso: '"+id+"'", "error");
            console.log(error);
        }
    });
}