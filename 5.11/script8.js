// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

const formatDate = (inDate) => {
  let nowTime = new Date();
  let result = nowTime.getTime() - inDate.getTime();

  if (result < 1000){
    return "прямо сейчас";
  }
  if (result < 60000) {
    return `${new Date(result).getSeconds()} сек. назад`;
  } 
  if (result < 3600000) {
    return `${new Date(result).getMinutes()} мин. назад`;
  } 
  
  return new Date(nowTime - result);
}
  
let date = new Date();
console.log(date);
// console.log(formatDate(date));

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
