// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
//  e inserisce un numero da 1 a 5.
// fare FUNCTION che genera un nemero random da 1 -5
// fare somma del user number + FUNCTION
// vedere se la somma è divisibile 2
//  IF lo è e l0utente ha scelto pari e la somma dei 2 numeri è pari vince
//  Else IF utente ha scelto dispari e la somma è dispari
//  ELSE a cpu vince

// DOM'S ELEMENTS
const buttonOddEl = document.getElementById("button-odd");
const buttonEvenEl = document.getElementById("button-even");
const userNumberEl = document.getElementById("user-number");
const cpuNumberEl = document.getElementById("cpu-number");
const resultEl = document.getElementById("result");

// SE UTENTE CLICCA SU PARI
buttonOddEl.addEventListener("click", function () {
  const userNumber = parseInt(prompt("scegli numero da 1 a 5"));
  const sumGame = parseInt(userNumber) + numberCpu;

  userNumberEl.append(userNumber);
  cpuNumberEl.append(numberCpu);

  if (sumGame % 2 == 0) {
    // alert("HAI VINTO!");
    resultEl.innerHTML = "HAI VINTO!!!";
  } else {
    // alert("HAI PERSO!");
    resultEl.innerHTML = "HAI PERSO!!!";
  }
  console.log(sumGame);
});

// SE L' UTENTE CLICCA DISPARI
buttonEvenEl.addEventListener("click", function () {
  const userNumber = parseInt(prompt("scegli numero da 1 a 5"));
  const sumGame = parseInt(userNumber) + numberCpu;

  if (sumGame % 2 !== 0) {
    alert("HAI VINTO!");
  } else {
    alert("HAI PERSO!");
  }
  console.log(sumGame);
});

// const numberUser = parseInt(prompt("scegli un numero da 1 a 5"));
const numberCpu = randomNumber1to5();
// FUNZIONE NUMERO RANDOM TRA 1 A 5
function randomNumber1to5() {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  return randomNumber;
  console.log("randomNumber1to5");
}
