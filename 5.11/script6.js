

// getSecondsToday() == 36000 // (3600 * 10)
const getSecondsToday = () => {
  const nowDate = new Date();
  return nowDate.getHours() * 3600 + nowDate.getMinutes() * 60 + nowDate.getSeconds();
};

console.log(getSecondsToday());