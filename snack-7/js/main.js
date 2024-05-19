//Snack 7
//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
//Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito,
// e stampare tutta la tabellina del 2 fino al numero inserito.


'use strict';
//inizializzazione variabili
const numeroUtente = Number(prompt('inserisci fino a che numero vuoi far arrivare la tabellina del due'));
//corpo programma
for (let i = 0; i <= numeroUtente; i = i + 2) {
    console.log(i);

}
