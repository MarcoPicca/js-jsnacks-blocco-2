// Crea una funzione che accetta due elementi del dom,
// uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

let bodyBody = document.querySelector('body');

const nuovoElemento = document.createElement('h2');
nuovoElemento.innerHTML = 'lollobarocco';

function aggiungiElementoAlParent (elementoDaAggiungere, parentElement){
    parentElement.appendChild(elementoDaAggiungere);
}

aggiungiElementoAlParent(nuovoElemento, bodyBody);

