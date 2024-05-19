//Snack 5
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.Stampa l'array alla fine.

'use strict';

//inizializzazione 
const numeriDispari = [];

for (let i = 0; i < 6; i++) {
    const numeroUtente = Number(prompt('inserisci il numero'));
    if (!isNaN(numeroUtente)) {
        if (numeroUtente % 2 !== 0) {

            numeriDispari.push(numeroUtente);
        }
    }
}

console.log(numeriDispari);