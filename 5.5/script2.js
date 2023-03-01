// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

const filterRange = (inputArray, min, max) => {
  return inputArray.filter((value) => {
    return value >= min && value <= max;
  })
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered, "filtered" ); // 3,1 (совпадающие значения)

console.log( arr, "arr" ); // 5,3,8,1 (без изменений)