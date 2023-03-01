
let schedule = {};
schedule.name = "John";
schedule.surname = "Smith";
schedule.name = "Pete";

let isEmpty = (inObject) => {
  const objKeys = Object.keys(inObject);
  
  return objKeys.length ? false : true ;
}

schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false