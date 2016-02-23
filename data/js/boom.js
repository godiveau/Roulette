function randomNumber(donne, perd, gagne) {
    var x = document.getElementById("resultat")
    x.innerHTML = Math.floor((Math.random() * 36) + 1);
}

	var donne = $(".form-control.numero").val(); //La variable reçoit le contenu

	if (donne >= 5 ) {
		document.getElementById("#resultat").html('GAGNÉ !'); //La variable affiche gagné
		
	
}
function myFunction() {
    document.getElementById("#resultat").reset();
}




	//var perd = $('#resultat').html('PERDU !'); //La variable affiche perdu	
	//var gagne = $('#resultat').html('GAGNÉ !'); //La variable affiche gagné
