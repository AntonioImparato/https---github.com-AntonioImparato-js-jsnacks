//Snack 6
//Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
//Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.

'use strict';
//inizializzazione dati 
const numeroUtente = Number(prompt('inserisci il numero'));
const numeroRandom = Math.floor(Math.random() * 11);

//corpo del codice
if (!isNaN(numeroUtente)) {


    if (numeroRandom === numeroUtente) {
        console.log('hai vinto');
    } else {
        console.log('perso');
    }

} else {
    console.log('non hai inserito un numero');
}

