// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// const groupById = (inArr) => {
//   return inArr.reduce((accumulator, item, index, array) => {
//     // console.log(accumulator, item, index);
//     accumulator[item.id] = item;
//     return accumulator;
//   },  {})
// }

const groupById = (inArr) => {
  let obj = {};
  inArr.forEach(element => {
    obj[element.id] = element;
  });
  return obj;
}
// я убился с этим методом reduce, час убил, ну его.
let usersById = groupById(users);

console.log(usersById);

// после вызова у нас должно получиться:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }