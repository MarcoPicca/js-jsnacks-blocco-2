// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


function paroleForti () {
    let userPrimaParola = prompt('inserisci la prima parola');
    let userSecondaParola = prompt('inserisci la seconda parola');

    if (userPrimaParola.length === userSecondaParola.length) {
        let risultatoPari = userPrimaParola + '' + userSecondaParola;
        return risultatoPari;
    } else if (userPrimaParola.length < userSecondaParola.length){
        return userPrimaParola;
    } else {
        return userSecondaParola;
    }
}

console.log(paroleForti);