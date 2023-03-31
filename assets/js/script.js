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

random(1,100);
view();



//**************************************************************** Funzioni ***
function random(min, max) {
  let i = 0;
  while ( i < 5) {
    let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let nmb = randomNumber(min, max);
    if (!numberRandom.includes(nmb)) {
      numberRandom.push(nmb);
      i++
    }
  }
}

function view() {
  output.innerHTML = numberRandom;
}


