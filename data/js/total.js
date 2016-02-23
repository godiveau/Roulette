$(function() {
$('#resultat').html('GAGNÉ !')

$('.badge.joueur').html('150')
$('.badge.bank').html('150')

});

// Booléen qui est vrai tant
// .start_button

// récupère
// .form-control.pair
// .form-control.numero
// #mise

// donne ou enlève
// .badge.joueur .badge.bank



function randomNumber(donne) {
    var x = document.getElementById("resultat")
    x.innerHTML = Math.floor((Math.random() * 36) + 1);
}




function recupPairImpair()
{
var pairImpair = $(.form-control.pair).val(); //La variable reçoit le contenu
}
if (pairImpair === "Pair") {
return &('#resultat').html('GAGNÉ !');

} else if (pairImpair === "Impair") {
return &('#resultat').html('GAGNÉ!');

} else {
return &('#resultat').html('PERDU !');
}



function recupNumero(nombre) {
var numeroSortant = $(.form-control.numero).val(); //La variable reçoit le contenu
}
if (numeroSortant === nombre);
return $('.badge.joueur').html('GAGNÉ !');




function recupMise () {
var mise = $(#mise).val(); //La variable reçoit le contenu
}

</script>