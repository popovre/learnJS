let days = [0, 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const getLocalDay = (inDate) => {

  let day = inDate.getDay();
  console.log(day)
  if (day === 0) { 
    day = 7;
  }

  return days[day];
}

let date = new Date(2023, 2, 31);  // 1 марта 2023 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2

