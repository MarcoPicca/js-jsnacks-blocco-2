// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso.
// Micro bonus: se sono uguali ritorna il numero.


function numeri (primoNumero, secondoNumero){
    if(primoNumero === secondoNumero){
        return primoNumero;
    }
    else if (primoNumero % secondoNumero === 0){
        return true;
    } else {
        return false;
    }
}

console.log(numeri (2, 6));