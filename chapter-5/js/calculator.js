// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division.
// You can use either a function declaration or a function expression.

// TODO: complete program
function calculate( x,y,z ) {
  if (y === "+") {
      return x + z;
  }else if (y === "-") {
    return x - z;
  }else if (y === "*") {
    return x * z
  }else if (y === "/") {
    return x / z
  }else{
    "enter a number"
  }

}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
