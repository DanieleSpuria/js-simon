/*********************************************** Sviluppo ****
* - input, bottone, h1, due array vuoti;                     *
* - numeri random unici e salvarli in un array;              *
* - timer di 5s;                                             *
* - far sparire i numeri;                                    *
* - salvare i numeri inseriti tramite input nell'altro array;*
* - confrontare i due array e stampare i numeri uguali;      *
*************************************************************/


//*************************************************** Html ***  
const start = document.getElementById('start');              
const repeat = document.getElementById('repeat');
      repeat.className = 'd-none';
const box = document.getElementsByClassName('box')[0];
      box.className = 'd-none';
const input = document.querySelector('input');
const invia = document.getElementById('invia');
const output = document.querySelector('h1');



//*************************************************** Dati ***
let numberRandom = [];
let numberUser = [];
let numberVerify = [];
let time = 5; 

start.addEventListener('click', play);
invia.addEventListener('click', insertNumber);
repeat.addEventListener('click', play)



//*********************************************** Funzioni ***
function play() {
  start.classList.add('d-none');
  repeat.classList.add('d-none');
  reset();
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
  console.log('random',numberRandom); //<---------------------------------------------------------------------------
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
      box.classList.remove('d-none');
      clearInterval(timer)
    }
  }, 1000);
}

function insertNumber() {
  output.innerHTML = '';
    if (!numberUser.includes(parseInt(input.value))) {
    numberUser.push(parseInt(input.value));
  } else {
    output.innerHTML = 'Numero già digitato!';
  }
  input.value = '';
  verify(); 
}

function verify() {
  if (numberUser.length === 5) {
    for (let i = 0; i < 5; i++) {
        if (numberRandom.includes(numberUser[i])) {
        numberVerify.push(numberUser[i]);
      } 
    }
    console.log('verify',numberVerify, 'length', numberVerify.length);//<-------------------------------------------
    end();
  }
}

function end() {
  box.classList.add('d-none');
  repeat.classList.remove('d-none');  
  let message;
  switch (numberVerify.length) {
    case 5:
      message = `
      Ottimo! Hai ricordato tutti i ${numberVerify.length} numeri! <br>
      ${numberVerify}
      `;
      break;
  
    case 0:
      message = `
      Non hai ricordato neanche un numero! <br>
      Meglio l'ippica!
      `;
      break;
  
    default:
      message = `
      Hai ricordato ${numberVerify.length} numeri! <br>
      ${numberVerify}
      `;
      break;
  }
  output.innerHTML = message;
}

function reset() {
  input.value = '';
  time = 5;
  numberRandom = [];
  numberUser = [];
  numberVerify = [];
}




