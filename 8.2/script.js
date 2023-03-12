function NewObj(value) {
  this.property = value;
}

const obj1 = new NewObj(2);
const obj2 = new obj1.constructor(3);
console.log(obj1)
console.log(obj2)