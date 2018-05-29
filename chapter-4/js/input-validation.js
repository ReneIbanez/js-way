//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let userNum = Number(prompt("Enter a number"));

while (userNum > 100 || userNum < 50 ) {
    userNum = Number(prompt("Enter number between 50 - 100"))
  console.log(userNum)
}
