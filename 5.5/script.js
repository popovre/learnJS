// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

const camelize = (str) => {
  let strSplitted = str.split('-');
  console.log(strSplitted)
  let upperCased = strSplitted.map((value, index) => {
    if (index != 0) {
      return value = value[0].toUpperCase() + value.slice(1);
    }
    return value;
  });

  return upperCased.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
