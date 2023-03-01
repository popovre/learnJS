let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


const topSalary = (salaries) => {

  let maxSalary = 0;
  let maxName = null;

  for(let salary of Object.values(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
    }
  }


  for (let [i, j] of Object.entries(salaries)) {
    if (j === maxSalary) {
      maxName = i;
    }
  }

  return maxName;
}

console.log(topSalary(salaries))
