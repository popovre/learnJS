// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
const ucFirst = (word) => {
  if (typeof(word) === 'string' && word.length > 0){
    let firstSymbol = word[0].toUpperCase();
    return firstSymbol + word.slice(1);
  } 
}

console.log(ucFirst("вася"))