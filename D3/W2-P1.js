/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = Math.floor(Math.random() * 100);
console.log(x)
let y = Math.floor(Math.random() * 100);
console.log(y)
if (x > y) {
  console.log("la variabile x è più grande");
} else if (y > x) {
  console.log("la variabile y è più grande");
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = Math.floor(Math.random() * 6);
console.log(x)
if (x == 5) {
  console.log("la variabile x è un " + x);
} else if (x != 5) {
  console.log("la variabile " + x + " non è uguale a 5");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Inserisci un numero ", function (answer) {
  var numero = answer
  var risultato = numero % 5
  if (risultato > 0) 
  console.log('Numero non divisibile per 5!');
  else
  console.log(`Numero divisibile per 5!`);
})
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = Math.floor(Math.random() * 10);
console.log("La x vale:", x)
let y = Math.floor(Math.random() * 10);
console.log("La y vale: ", y)
if (x === 8) {
  console.log("La x ha valore 8")
} else if (y === 8) {
  console.log("La y ha valore 8")
} else if (x + y === 8) {
  console.log("La somma di x e y è 8")
} else if (x - y === 8) {
  console.log("La sottrazione di x e y è 8")
} else {
  console.log("Nessuno dei due numeri ha o può produrre valore 8")
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let shipping = 10
let totalShoppingCart = Math.floor(Math.random() * 100);
console.log("Il totale è ", totalShoppingCart)

if (totalShoppingCart > 50){
  console.log("Hai diritto alla spedizione gratuita")
} else {
  totalShoppingCart += shipping
  console.log("Mi dispiace, ma non hai diritto alla spedizione gratuita, la spedizione è di ", shipping, "il tuo totale è ora di ", totalShoppingCart)
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let shipping = 10
let totalShoppingCart = Math.floor(Math.random() * 100);
console.log("Il totale è ", totalShoppingCart)

totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20/100)
console.log("Oggi è il Black Friday, quindi hai diritto ad uno sconto del 20% su ogni prodotto!")
console.log("Il tuo nuovo dotale è di ", totalShoppingCart)
if (totalShoppingCart > 50){
  console.log("Hai diritto alla spedizione gratuita")
} else {
  totalShoppingCart += shipping
  console.log("Mi dispiace, ma non hai diritto alla spedizione gratuita, la spedizione è di ", shipping, "il tuo totale è ora di ", totalShoppingCart)
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
let z = Math.floor(Math.random() * 100);
let q
if (x > y) {
  q = x
  x = y
  y = q
}
if (x > z) {
  q = x
  x = z
  z = q
}
if (y > z) {
  q = y
  y = z
  z = q
}
console.log("L'ordine è il seguente: ", x, y, z)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
non trovo la risposta
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Inserisci un numero ", function (answer) {
  var numero = answer
  var risultato = numero % 2
  if (risultato > 0)
  console.log('Numero non pari!');
  else
  console.log(`Numero pari!`);
})
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let val = Math.floor(Math.random() * 11);
if (val < 10 && val > 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/*

ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num = Math.floor(Math.random()*50)
if (num < 5){
  console.log("Tiny")
} else if (5 < num && num < 10){
  console.log("Small");
} else if (10 < num && num < 15){
  console.log("Medium")
} else if (15 < num && num < 20){
  console.log("Large");
} else {
  console.log("Huge");
}
*/

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let gender
let isMale = Math.floor(Math.random()*50)
isMale<=25?gender="male":gender="Female"
console.log(gender);
*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let max = 5
let i = 0
while (i < max+1) {
  console.log(i);
  i++
}
*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let max = 10
for (let i = 0; i < max+1; i++) {
  console.log(i);
}
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let max = 10
for (let i = 0; i < max+1; i++) {
  if (i === 3) {
    i++
  }else if (i === 8) {
    i++
  }
  console.log(i);
}
*/

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let max = 15
for (let i = 0; i < max+1; i++) {
  if (i % 2 === 0) {
    console.log("Il valore è pari:", i);
  } else {
    console.log("Il valore è dispari:", i);
  }
}
*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let max = 15
for (let i = 0; i < max+1; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}
*/

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let day = Math.floor(Math.random()*8)

switch (day) {
  case 1:
    console.log("Lunedi");
    break;
  case 2:
    console.log("Martedi")
    break;
  case 3:
    console.log("Mercoledi");
    break;
  case 4:
    console.log("Giovedi");
    break;
  case 5:
    console.log("Venerdi");
    break;
  case 6:
    console.log("Sabato");
    break;    
  default:
    console.log("Domenica");
    break;
}
*/