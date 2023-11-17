// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
// e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.


let nameList = ['angelo','germinio','aldo','mirko','carlo'];
let lastNameList = ['ganzi','trenoro', 'cafasso', 'molerbi', 'crattoli'];

let nameSurname = [];

let numberOfRandom = 15;


for (let i=0; i < numberOfRandom; i++){
    let firstNameGen = nameList[ Math.floor(Math.random() * nameList.length)];
    let lastNameGen = lastNameList[ Math.floor(Math.random() * lastNameList.length)];
    let completeNameGen = firstNameGen + ' ' + lastNameGen;
    nameSurname.push(completeNameGen);
}

console.log(nameSurname);