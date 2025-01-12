/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui

function countVowels(string) {

    let vowels = 0;


    // Inserisci ciclo

    for (let i = 0; i < string.length; i++) {

        let type = string.charAt(i);

        if (["a", "e", "i", "o", "u"].includes(type)) {

            vowels += 1;
            
        }

      
    }

    return vowels;
  }  


// Invoca la funzione qui e stampa il risultato in console

countVowels(word);

console.log(countVowels(word));



// Risultato atteso se si passa 'javascript': 3 (a, a, i)