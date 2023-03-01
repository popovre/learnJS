// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (inArr) => {
  let newArr = inArr.slice();
  return newArr.sort();
}

let sorted = copySorted(arr);

console.log( sorted, "sorted"); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)