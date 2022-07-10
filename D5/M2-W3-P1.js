/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let l1
let l2
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r1.question("Inserisci il primo lato ", l1 => {
    r1.question("Inserisci il secondo lato ", l2 => {
        console.log(area(l1, l2));
        r1.close();
    });
});

function area(l1, l2) {
    let ar = Math.round(l1) * Math.round(l2);
    return ar;
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*

let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)
function crazySum(x, y) {
    if (x != y) {
        let z = x + y
        return z;
    } else {
        let z = (x + y) * 3
        return z;
    }
}
console.log("Il valore della x è:", x);
console.log("Il valore della y è:", y);
console.log(crazySum(x, y));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = 19
let y = Math.floor(Math.random()*100)
console.log("Il valore random è: ", y);
let res
function crazyDiff(x, y) {
    if (x > y) {
        res = x - y
        return res;
    } else {
        res = y - x
        if (res > x) {
        res = res * 3
    }
}
return res;
}
console.log(crazyDiff(x, y));
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let x = Math.floor(Math.random()*401)
let res
function boundary(x) {
    if (20 < x && x <= 100 || x === 400) {
        res = "True"
    } else {
        res = "False"
    }
    return res;
}
console.log(boundary(x));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let str = "lorem ipsum"
function codify(str) {
    if (str.indexOf("code") != 0 || str.indexOf("code") == -1){
        str = "code " + str
    }
    return str;
}
console.log(codify(str));
*/

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let number = 22
function check3and7(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        let vero = "true"
        return vero;
    } else {
        let falso = "false"
        return falso;
    }
}
console.log(check3and7(number));
*/

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let str = "SCRIVI QUI LA TUA RISPOSTA"

function reverseString(str) {
    return str.split("").reverse().join("");
}
let revStr = reverseString(str)
console.log(revStr);
*/

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let str = "che accetta una stringa come parametro"
function upperFirst(str) {
    let upStr = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return upStr;
}
console.log(upperFirst(str));
*/

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let str = "che accetta una stringa come parametro"

function cutString(str) {
    let cutStr = str.slice(1, -1)
    return cutStr;
}
console.log(cutString(str));
*/

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 50
var array = []

function giveMeRandom(array) {
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()*11)
      }
      return array;
}
console.log(giveMeRandom(array));