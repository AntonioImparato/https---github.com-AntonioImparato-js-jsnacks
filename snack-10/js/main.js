//Snack 10
//Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
//Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

'use strict';
//inizializzazione variabili
let numeroUtente = 0;

//corpo programma

for (let i = 1; i > numeroUtente; i++) {
    let numero2 = Number(prompt('inserisci numero'));

    let numero1 = Number(prompt('inserisci numero'));
    // dopo il controllo diamo il valore alla variabile del ciclo i+2 in modo tale da uscire 
    if (numero1 === numero2) {
        console.log('hai inserito due numeri uguali consecutivamente');
        numeroUtente = i + 2;
    }

}