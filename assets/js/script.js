/***************************************************************** Sviluppo ***
- input, bottone, h1, due array vuoti;
- numeri random unici e salvarli in un array;
- timer di 5s;
- far sparire i numeri;
- salvare i numeri inseriti tramite input nell'altro array;
- confrontare i due array e stampare i numeri uguali;
******************************************************************************/


//******************************************************************** Html ***  
const start = document.getElementById('start');
const box = document.getElementsByClassName('box')[0];
      box.className = 'd-none';
const input = document.querySelector('input');
const invia = document.getElementById('invia');
const output = document.querySelector('h1');



//******************************************************************** Dati ***
let numberRandom = [];
let numberUser = [];
let time = 5;

start.addEventListener('click', play);
invia.addEventListener('click', insertNumber);





//**************************************************************** Funzioni ***
function play() {
  start.classList.add('d-none');
  box.classList.remove('d-none');
  view();
}

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
  random(1,100);
  output.innerHTML = numberRandom;
  console.log(time);
  noView();
}

function noView() {
  const timer = setInterval(function() {
    time--
    console.log(time);

    if (time === 0) {
      output.innerHTML = '';
      clearInterval(timer)
    }
  }, 1000);
}

function insertNumber() {
  numberUser.push(parseInt(input.value));
  verify(); 
}

function verify() {
  if (numberUser.length === 5) {
    for (let i = 0; i < 5; i++) {
      if (numberRandom.includes(numberUser[i])) {
        output.innerHTML += numberUser[i] + ', '; 
      }
    }
  }
}




