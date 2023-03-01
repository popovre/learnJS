let user = {
  name: "John",
  years: 30
};


// ваш код должен быть с левой стороны:
// ... = user

let {name, years: old, isAdmin = false} = user;

console.log( name ); // John
console.log( old ); // 30
console.log( isAdmin ); // false