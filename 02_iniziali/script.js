/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui

function firstLetter(namesInArray) {
    

// Crea nuovo array

const newNames = [];


// Crea ciclo sull'array originario

for (let i = 0; i < namesInArray.length; i++) {

    let element = namesInArray[i];

    let elementTwo = element.charAt(0);

    newNames.push(elementTwo);
    
}

return newNames;

}


// Invoca la funzione qui e stampa il risultato in console

firstLetter(names);

console.log(firstLetter(names));




// Risultato atteso: ["A", "L", "M", "A", "G", "A"]