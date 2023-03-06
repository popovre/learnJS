
// const sumTo = (n) => {
//   let sum = 0;
//   for (let i=1; i<=n; i++) {
//     sum+= i;
//   }
//   return sum;
// }

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));

// const sumTo = (n) => {
//   if (n == 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// } 

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));

const sumTo = (n) => {
  return n * (n + 1) / 2;
}

console.log(sumTo(4) );