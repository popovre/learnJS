// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

const extractCurrencyValue = (value) => {
  return typeof(value) === 'string' ? +value.slice(1, value.length) : false;
}

alert( extractCurrencyValue('$120') === 120 ); // true
console.log(extractCurrencyValue('$120'));