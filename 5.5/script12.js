// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
  /* ваш код */
  return arr.filter( (item, index, array) => index === array.indexOf(item));
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));
// alert( unique(strings) ); // кришна, харе, :-O