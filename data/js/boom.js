/*-------------------------------------------------------*\
                    variables
\*-------------------------------------------------------*/
$argent = document.getElementById("argent");
$argentBank = document.getElementById("argentBank");
$bouton = document.getElementById("bouton");
$displayresult = document.getElementById("displayresult");
$displayroulette = document.getElementById("displayroulette");
$nselect = document.getElementById("SelectedNumber");
$select = document.getElementById("PairImpair");

total = 10000;
totalbank = 100000;

// Selection paire impair
function selitem(){
    $choix = $select.selectedIndex;
    $valeur = $select.options[$choix].value;
}

// Selection du chiffre sur lequel miser
function selnumber(){
    $nchoix = $nselect.selectedIndex;
    $nvaleur = $nselect.options[$nchoix].value;
}

// Selection d'un nombre entre 0 et 36
function nombreroulette(){
    roulette = Math.floor(Math.random() * 37);
    $displayroulette.innerHTML = roulette
}

// Récupère la somme à miser dans le input
function amiser(){
    somme = document.getElementById("somme").value;
}

// Actualisation de l'argent en cas de perte
function loose(){
    total = total - somme;
    totalbank = totalbank + (somme *1);
    enbank();
    gameover();
}

// Actualisation de l'argent quand la roulette tombe sur le nombre choisi
function win(){
    total = total + (somme * 36);
    totalbank = totalbank - (somme * 36);
    enbank();
    gameover();
}

// Actualisation de l'argent quand on a bien choisis paire ou impair
function littlewin(){
    total = total + (somme * 2);
    totalbank = totalbank - (somme * 2 );
    enbank();
    gameover();
}

// Message gagner perdu en cas de bankroute
function gameover(){
    enbank();
        if(total <= 0){
    $(document).ready(function(){
        $("#modalrejouer").modal('show');
    });
        }else if (totalbank <= 0){
    $(document).ready(function(){
        $("#modalrejouergagne").modal('show');
    });
        }
}



// Affiche notre total d'argent sur la page html
function enbank(){
    $argent.innerHTML = total;
    $argentBank.innerHTML = totalbank;
}


// Pour savoir si l'argent est misée
function testingMise() {
        if($("#somme").val() === ''){
        $displayresult.innerHTML = "Vous oubliez de placer votre mise, rien ne vas plus !"
    }
}


// Pour savoir si un select est choisi
function testingSelect() {
        if($("#PairImpair").val() === ''){
        $displayresult.innerHTML = "Vous devriez choisir une couleur ou un numéro non ?"
    }
}

// Lancer le jeux puis savoir si on gagne ou on pert
function resultat(){
    testingMise();
    testingSelect();
    nombreroulette();
    amiser();
    if((roulette != $nvaleur) && ((roulette % 2) != $valeur) || (roulette === 0)){
        $displayresult.innerHTML = "Vous avez salement perdu, ça va ?";
        loose();
    }else if(roulette == $nvaleur){
        $displayresult.innerHTML = "Vous avez gagné 36 fois votre mise, coup de bol.";
        win();
    }else{
        $displayresult.innerHTML = "Vous avez gagné 2 fois votre petite mise, content ? ";
        littlewin();
    }
}

$bouton.onclick = resultat;
amiser();
enbank();