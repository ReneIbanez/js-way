//Improve the previous program so that it shows the word written backwards.

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
  let splitS = s.split("");
  console.log(splitS);
  let reverseS = splitS.reverse();
  console.log(reverseS);
  let joinS = reverseS.join("");
  console.log(joinS)
  return s.split("").reverse().join("");
}
console.log(reverse(userWord));
