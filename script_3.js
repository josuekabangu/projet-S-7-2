

// On définit le nombre d'espaces avant la dièse en enlevant 1 au nbrStars
// (pour laisser place à la dièse)
function pyramid(nbrStars){
    let nb_spaces = nbrStars - 1
    for (number = 1; number <= nbrStars; number++) {
        // En JS, repeat permet de répéter le string le nombre de fois voulu
        console.log(" ".repeat(nb_spaces) + "#".repeat(number));
        // On réduit le nombre d'espaces de 1 à chaque passage de boucle.
        nb_spaces--
    }
}

// On demande à l'utilsateur de rentrer le nombre d'étages qu'il veut
let nbrStars = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid(nbrStars);
