// Palidroma
// Chiedere all'utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma
//   devo confrontare se le posizioni delle lettere della parola sono uguali alla prima e all' ultima
//   IF la prima lettera è word.length [0]  == all'ultima (word.length -1 )
//      .... length [1] == length -2

// const userWord = prompt("inserisci una parola");
// isPalindrone(asss);
const buttonPalindromeEl = document.getElementById("button-palindrome");
const wordInputEl = document.getElementById("word-input");
const choiceWordEl = document.getElementById("choice-word");
const okItsPalindrome = document.getElementById("ok-palindrome");
// const userWord = prompt("inserire una parola");
// let userNumber = 0;
// console.log(thisNumberIsPalindrome);
// console.log(userWord);

buttonPalindromeEl.addEventListener("click", function () {
  let userNumber = wordInputEl.value;
  let thisNumberIsPalindrome = isPalindrome(userNumber);

  if (thisNumberIsPalindrome) {
    choiceWordEl.innerHTML = ` E' PALINDROMA `;
  } else {
    choiceWordEl.innerHTML = `NON E' PALINDROMA `;
  }
  // console.log(userNumber);
  // console.log(thisNumberIsPalindrome);
});

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }

  return true;
}
