// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

const checkSpam = (str) => {
  return str.toLowerCase().indexOf('viagra') != -1 || str.toLowerCase().indexOf('xxx') != -1 ? true : false;
}

console.log(checkSpam('buy ViAgRA now') )
console.log(checkSpam('free xxxxx')  )
console.log(checkSpam("innocent rabbit")  )

