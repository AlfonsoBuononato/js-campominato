/********************************
Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*********************************/

// VARIABILI DI UTILIZZO 
var numeroMax;                                               //NUMERO MASSIMO DA SELEZIONARE
var numeroBombe = 16;                                        //NUMERO DI BOMBE
var possibilita;                                             //POSSIBILITA DI NUMERO CORRETTO
var listaBombe = [];                                        //NUMERI BOMBA    
var numeriCorretti = [];                                    //NUMERI SELEZIONATI CORRETTAMENTE
var utente = 0;                                             //NUMERO INSERITO DALL UTENTE

/* ***************************
ESERCIZIO BONUS
**************************** */
var difficolta = parseInt(prompt("INSERIRE LIVELLO DI DIFFICOLTA TRA 0 1 2"));

while(isNaN(difficolta) || difficolta > 2){
    var difficolta = parseInt(prompt("SCEGLIERE IL LIVELLO DI DIFFICOLTA TRA 0 1 2"));
}

switch(difficolta){
    case 0:
        numeroMax = 100;
        break;
    case 1:
        numeroMax = 80;
        break;
    case 2:
        numeroMax = 50;
}

var possibilita = numeroMax - numeroBombe; 

// GENERIAMO I 16 NUMERI CASUALI

while (listaBombe.length < numeroBombe){

    var numeroRandom = numeroGenerato(numeroMax);

    if(! listaBombe.includes(numeroRandom)){
        listaBombe.push(numeroRandom);
    }

}

console.log(listaBombe);

/*******************************
*CHIEDIAMO ALL UTENTE IL NUMERO DA SELEZIONARE
********************************/

while ((numeriCorretti.length < possibilita) && (! listaBombe.includes(utente) ) ){
    var utente = parseInt(prompt("inserisci un numero da 1 a " + numeroMax + "\nnumero di tentativi: " + numeriCorretti.length + " di " + possibilita));
    // VALIDAZIONE

    while(isNaN(utente) || (utente < 1) || (utente > numeroMax)){
        var utente = parseInt(prompt("VALORE INSERITO NON VALIDO. \ninserisci un numero da 1 a " + numeroMax + "\nnumero di tentativi: " + numeriCorretti.length))
    }

    // CONTROLLO SE è UNA BOMBA
    if(listaBombe.includes(utente)){
        alert("Hai perso. \nNumero di tentetivi riusciti con successo: " + numeriCorretti.length);
    }else if(numeriCorretti.includes(utente)){
        alert("Il numero inserito è gia presente.\nInserire un altro numero.");
    }else if(! numeriCorretti.includes(utente)){
        numeriCorretti.push(utente);
    }
    // CONTROLLO SE ABBIAMO RAGGIUNTO IL NUMERO DI POSSIBILITA 
    if(numeriCorretti.length === possibilita){
        alert("Hai vinto!!!");
    }
}

/********************* 
RISULTATO FINALE
***********************/
console.log("--- GIOCO FINITO ---");
console.log("Il giocatore ha inserito i numeri corretti un totale di: " + numeriCorretti.length + " che sono i seguenti: " + numeriCorretti);








/********************
UTILITIES FUNCTION
********************/

// FUNZIONE PER GENERARE NUMERI RANDOM DA INSERIRE NELLA LISTA BOMBE
function numeroGenerato(max){
    return Math.floor(Math.random() * max) + 1;
}






