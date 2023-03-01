// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
let arr = [5, 3, 8, 1];

const filterRangeInPlace = (inputArray, min , max) => {
  for (value in inputArray) {
    if (value <= min || value>= max) {
      inputArray.splice(value, 1);
    }
  }
  return inputArray;
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr, "arr" ); // [3, 1]