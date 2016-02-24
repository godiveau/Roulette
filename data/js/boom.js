var select, choix, valeur, nselect, nchoix, bouton, nvaleur, roulette, somme,argent, total, argentBank, totalbank;

// Notre argent de depart
total = 10000;

// Argent bank de départ
totalbank = 10000;

argent = document.getElementById("argent");
argentBank = document.getElementById("argentBank");
bouton = document.getElementById("bouton");

// Retiens notre selection paire ou impaire
function selitem(){
    select = document.getElementById("PairImpair");
    choix = select.selectedIndex;
    valeur = select.options[choix].value;
}

// Retiens notre selection du chiffre sur lequel miser
function selnumber(){
    nselect = document.getElementById("SelctedNumber");
    nchoix = nselect.selectedIndex;
    nvaleur = nselect.options[nchoix].value;
}

// Selection aleatoire d un nombre entre 0 et 36
function nombreroulette(){
var x = document.getElementById("resultat")
    x.innerHTML = Math.floor((Math.random() * 36) + 0);
}

// Récupere la somme a miser dans le input 
function amiser(){
    somme = document.getElementById("somme").value;
}

// Actualisation de l'argent en cas de perte 
function loose(){
    total = total - somme;
    totalbank = totalbank + (somme *1);
    enbank();
    danslabank();
}

// Actualisation de l'argent sort bon numéro
function win(){
    total = total + (somme * 36);
    totalbank = totalbank - (somme * 36);
    enbank();
    danslabank();
}

// Actualisation de l'argent sort pair ou impair
function littlewin(){
    total = total + (somme * 2);
    totalbank = totalbank - (somme * 2 );
    enbank();
    danslabank();
}

// Message gagner perdu en cas de bankroute 
function gameover(){
    enbank();
    danslabank();
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

//Affiche l'argent du joueur
function enbank(){
    argent.innerHTML = total;
}

//affiche l'argent de la bank
function danslabank(){
    argentBank.innerHTML = totalbank;
}

//Pour savoir si on gagne ou on pert 
function resultat(){
    nombreroulette();
    amiser();
        
        if ((((roulette != nvaleur)) && ((roulette % 2) != valeur)) || (roulette === 0))
        {  
    $(document).ready(function(){
        $("#modalloose").modal('show');
    });
                return loose(), gameover();
        
        } else if(((roulette == nvaleur))){
    $(document).ready(function(){
        $("#modalgagne").modal('show');
    });
          return win(),gameover();

        } else {
    $(document).ready(function(){
        $("#modalgagne").modal('show');
    });
                return littlewin(),gameover();
        }
}

bouton.onclick = resultat; //lance la function resultat
enbank();
amiser();
danslabank();