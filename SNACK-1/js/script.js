// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array = [];

let somma = 0;




while (somma < 50){
    let userNum = parseInt(prompt('scrivi un numero'));
    if (!isNaN(userNum)){
    somma += userNum;
    array.push(userNum);
    }   
}

console.log(array, somma);