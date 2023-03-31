/***************************************************************** Sviluppo ***
- input, bottone, h1, due array vuoti;
- numeri random unici e salvarli in un array;
- timer di 5s;
- far sparire i numeri;
- salvare i numeri inseriti tramite input nell'altro array;
- confrontare i due array e stampare i numeri uguali;
******************************************************************************/


//******************************************************************** Html ***  
const input = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('h1');



//******************************************************************** Dati ***
let numberRandom = [];
let numberUser = [];



//**************************************************************** Funzioni ***
const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
