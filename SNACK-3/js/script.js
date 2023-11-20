// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


let userPrimaParola = prompt('inserire la prima parola');
let userSecondaParola = prompt('inserire la seconda parola');







function paroleForti (primaParola, secondaParola) {
    if(primaParola.length === secondaParola.length){
        return true;
    } else {
        return false;
    }
}


if (paroleForti (userPrimaParola, userSecondaParola)){
    console.log(userPrimaParola, userSecondaParola);
} else if (userPrimaParola > userSecondaParola){
    console.log(userPrimaParola);
} else {
    console.log(userSecondaParola);
}

