// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (inArr) => {
  let averageAge = 0;
  inArr.forEach(element => {
    averageAge+= element.age;
  });
  return averageAge / inArr.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28