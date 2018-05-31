// Complete the following program so that it asks the user for his first and last names, then show
// the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
let firstName = prompt("Enter your first name")
let lastName =  prompt("Enter your last name")
// TODO: call sayHello() and show its result
console.log(sayHello(firstName, lastName));
