// Palidroma
// Chiedere all'utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma
//   devo confrontare se le posizioni delle lettere della parola sono uguali alla prima e all' ultima
//   IF la prima lettera è word.length [0]  == all'ultima (word.length -1 )
//      .... length [1] == length -2

// const userWord = prompt("inserisci una parola");
// isPalindrone(asss);

// function isPalindrone(word) {
//   let currentLetter = userWord[i];
//   let wordLength = word.length;
//   for (let i = 0; i < wordLength / 2; i++) {
//     if (currentLetter !== word[wordLength - 1 - i]) {
//       return false;
//   }
// }
const userWord = prompt("inserire una parola");

let thisNumberIsPalindrome = isPalindrome(userWord);
console.log(thisNumberIsPalindrome);
console.log(userWord);

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
