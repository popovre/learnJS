// getSecondsToTomorrow() == 3600;

const getDateToday = () => {
  return new Date();
};

const getSecondsToTomorrow = () => {
  const nowDate = getDateToday();

  const tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()+1);

  let diff = (tomorrowDate - nowDate) / 1000; 
  return Math.round(diff); 
}

console.log(getSecondsToTomorrow());