// Write a program that asks you for a word then shows its length,
// lowercase, and uppercase values.

let userWord = prompt("give me a word and get the length");
let caps = userWord.toUpperCase()
let lowercase = userWord.toLowerCase()

let length = userWord.length

console.log(length);
console.log(caps);
console.log(lowercase);
