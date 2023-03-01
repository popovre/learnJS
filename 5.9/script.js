let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (obj) => {
  let sum = 0;
  Object.values(obj).forEach(value => sum+= value);
  return sum
}

console.log( sumSalaries(salaries) ); // 650