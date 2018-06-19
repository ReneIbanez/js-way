const values = [3, 11, 7, 2, 9, 10];
let total = 0;

for(let i = 0; i < values.length; i++){
  let count = values[i];
  // total equals the sum of total and count
  total = total + count;
}

console.log(total);
