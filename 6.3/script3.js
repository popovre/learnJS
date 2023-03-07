// У нас есть массив объектов, который нужно отсортировать:


let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (inString) => {
  return function(a, b) {
    return a[inString] > b[inString] ? 1 : -1;
  }
}

// users.sort(byField('age'));
// console.log(users);
users.sort(byField('surname'));
console.log(users);