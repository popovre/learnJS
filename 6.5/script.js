
  function makeCounter() {
    let count = 0;

    function methods () {
      
      return count++;
    };

    methods.set = function(x) {
      count = x;
    } 
    
    methods.decrease = function(x) {
      count--;
    }

    return methods
    // ... ваш код ...
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)
