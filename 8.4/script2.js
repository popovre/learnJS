Function.prototype.defer = function(ms) {
  let context = this;
  return function() {
    setTimeout(() => context.apply(this, arguments), ms)
  }
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.