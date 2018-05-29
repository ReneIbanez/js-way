// Write a program that asks the user for a number, then shows the multiplication table for this number.
//  When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let num = Number(prompt('enter a number'))

while(num < 2 || num >9){
  num = Number(prompt('enter a number between 2 - 9'))
}

for(let i = 0; i <= 12; i++){
 let total = num * i;
 document.write(total + "<br>");
}
