const rawPrice = parseFloat(prompt("Enter your number:"));
const vatRAte = parseFloat(20.6/100);
let calculation = rawPrice * vatRAte ;
let total = rawPrice + calculation;
console.log(total)
