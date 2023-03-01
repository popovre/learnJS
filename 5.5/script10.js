let arr = [1, 2, 3];

const shuffle = (inArr) => {
  return inArr.sort(function compareNumeric(a, b) {
    if (Math.random() > 0.5) return a - b;
    return b - a;
  }) 
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));