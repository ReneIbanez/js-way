// Write a program that asks the user for a word until the user types "stop".
// The program then shows each of these words, except "stop".

let userWord = prompt("stops taking word as soon as you type in 'stop'");
const stop = "stop";
let array = [];

while (userWord != stop ) {
  array.push(userWord)
   userWord = prompt("stops taking word as soon as you type in 'stop'");

}
console.log(array.join(", "));
