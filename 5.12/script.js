let user = {
  name: "Василий Иванович",
  age: 35
};

let reroll = JSON.stringify(user);
let reroll2 = JSON.parse(reroll)
console.log(reroll2);