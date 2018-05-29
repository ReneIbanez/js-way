let randomNum = Number(prompt("enter a number"))

// while (randomNum <= 10) {
//   if (randomNum % 2 === 0) {
//     console.log([randomNum]+ "is even");
//   }else if(randomNum % 2 === 1 ){
//       console.log([randomNum]+ "is odd");
//   }
// }


for (let i = 1; i <= 10; i++) {
  if (randomNum % 2 === 0) {
    console.log(randomNum+ "is even");
  }else if(randomNum % 2 === 1 ){
      console.log(randomNum+ "is odd");
  }
  randomNum ++
}
