let date = new Date(2015, 0, 2);

const getDateAgo = (inDate, days) => {
  let dateCopy = new Date(inDate);

  dateCopy.setDate(inDate.getDate() - days); // вбиваем расчетную Дату
  return dateCopy.getDate(); 
}

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

