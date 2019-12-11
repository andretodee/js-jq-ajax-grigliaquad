// Esercizio di oggi: creare una griglia formata da 6x6 quadratini (anche in html va bene). Ad ogni click su un quadratino parte una chiamata AJAX all'API boolean
// https://flynn.boolean.careers/exercises/api/random/int
// che restituisce un numero intero.
// A seconda del valore restituito dall'API bisogna colorare il quadratino su cui si è cliccato, secondo queste regole:
// se il numero restituito dalle API è <= 5, il quadratino diventa giallo
// se il numero restituito dalle API è > 5, il quadratino diventa verde
$(document).ready(function(){

    //ciclo for per generare la griglia
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="quad"> </div>');
    }
    //intercetto il click
    $('.quad').click(function(){
        //this al di fuori dell'AJAX
        var currentQuad = $(this);

        $.ajax ({
            url : 'https://flynn.boolean.careers/exercises/api/random/int',
            method : 'GET',
            success : function (data) {
                console.log(data.response);

                $(currentQuad).text(data.response);

                if(data.response <= 5){
                    $(currentQuad).addClass('yellow');
                } else {
                    $(currentQuad).addClass('green');
                }
            },
            error : function () {
                alert('errore');
            }

        });
    });



});
