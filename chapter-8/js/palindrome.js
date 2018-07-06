/* Improve the previous program to check if the word is a palindrome.
A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing. */


let userWord = prompt("give me a word and get the length");
let caps = userWord.toUpperCase()
let lowercase = userWord.toLowerCase()
let vowels =['a','e','i','o','u']
let count = 0;
let length = userWord.length

function reverse(s){
  // s.split each character into one array
  // .reverse takes whatever your array is and reverses it
  //

  return s == s.split("").reverse().join("");
}
console.log(reverse(userWord));
