// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:

const sumTo = (n) => {
  if (n == 1) {
    return n;
  } else {
    return n * sumTo(n - 1);
  }
} 

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));