let user = {
  name: 'John',
  age: 30
};

const count = (obj) => {
  return Object.values(obj).length
}

console.log( count(user) ); // 2