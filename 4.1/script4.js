// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (inObj) => {
  for (let i in inObj) {
    typeof(inObj[i]) === "number" ? inObj[i]*= 2 : inObj[i] = inObj[i];
  }
}

multiplyNumeric(menu);
console.log(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};