// Improve the previous program so that it also shows the number of vowels inside the word.

let userWord = prompt("give me a word and get the length");
let caps = userWord.toUpperCase()
let lowercase = userWord.toLowerCase()
let vowels =['a','e','i','o','u']
let count = 0;
let length = userWord.length

for (var i = 0; i < lowercase.length; i++) {
  let userWordIndex = lowercase[i];
for (var j = 0; j < vowels.length; j++) {
  let vowelsIndex = vowels[j];
  if (userWordIndex === vowelsIndex) {
    count++;
    }
  }
}
console.log(count);


// let userWord = prompt("give me a word and get the length");
// let caps = userWord.toUpperCase()
// let lowercase = userWord.toLowerCase()
// let vowels =['a','e','i','o','u']
// let length = userWord.length
//
//
// for (var i = 0; i < userWord.length; i++) {
//   let userWordIndex = userWord[i];
// for (var j = 0; j < vowels.length; j++) {
//   let vowelsIndex = vowels[j];
//   if (userWordIndex === vowelsIndex) {
//     console.log('I have no clue');
//     }
//   }
// }


// console.log(length);
// console.log(caps);
// console.log(lowercase);
