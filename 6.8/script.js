// const printNumbers = (from, to) => {
//   let num = from;
//   let print = setTimeout(function tick() {
//     console.log(num++);
//     if(num <= to) {
//       print = setTimeout(tick, 1000); 
//     }
//   }, 1000);
// }

// printNumbers(0, 3);


const printNumbers = (from, to) => {
  let num = from;
  let print = setInterval(function tick() {
    console.log(num++);
    if(num > to) {
      clearInterval(print)
    }
  }, 1000);
}

printNumbers(0, 3);


