// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = () =>  {

  let numbers = [];
  let inputNum;
  do {
    inputNum = prompt("Введите число", 0);
    numbers.push(Number(inputNum));
  } while (
    inputNum !== "" && inputNum !== null && isFinite(inputNum)
  )
  let sum = 0;
  numbers.forEach((value) => sum+=value);
  
  return sum;
}

alert( sumInput() );