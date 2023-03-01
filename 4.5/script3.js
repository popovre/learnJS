
function Accumulator(num) {
  this.startNumber = num;
  this.value = 0;
  this.read = function(input) {
    this.value+= input;
  }
}

let accumulator = new Accumulator(1); // начальное значение 1
console.log(accumulator);

accumulator.read(2); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(1); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений