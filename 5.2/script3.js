
const readNumber = () => {
  let num = prompt("Введите число", 0)

  // return isFinite(num) ?  num = prompt("Введите число", 0) : num === null || num === '' ?  null : +num;
  do {
      num = prompt("Введите число", 0);
    } while (!isFinite(num));
    
    return (num === null || num === '') ?  null : +num;
  }

alert(`Число: ${readNumber()}`);