function f(x) {
  alert(x);
}

delay = function(func, ms) {
  return function(...args) { 
    savedThis = this;
    setTimeout(function() {
      return func.apply(savedThis, args);
    }, ms);
  }
}


// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс