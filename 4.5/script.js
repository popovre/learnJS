// Возможно ли создать функции A и B, чтобы new A() == new B()?
function C() {}
function A() { return C}
function B() { return C}

let a = new A();
let b = new B();

alert( a == b ); // true