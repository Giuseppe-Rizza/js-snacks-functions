/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Scegli la lettera impostando una variabile

const letter = "L";


// Dichiara la funzione qui

function changeArray(namesInArray, chosenLetter) {


    // Crea nuovo array

    const newNames = [];


    // Inserisci ciclo for

    for (let i = 0; i < namesInArray.length; i++) {

        let element = namesInArray[i];
        
        if (element.charAt(0) === chosenLetter) {

            newNames.push(element)
            
        }
    }

    return newNames;
    
}


// Invoca la funzione qui e stampa il risultato in console

changeArray(names, letter)

console.log(changeArray(names, letter));


// Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]