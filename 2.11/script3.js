// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let pass;
let login = prompt("Введите логин", '');

 if (login === "Админ") {
  let pass = prompt('Введите пароль?', '') 

  pass === "Я главный" ? alert( 'Здравствуйте!' ) :
  pass === ('' || pass === null) ? alert( "Отменено" ) :
  alert( "Неверный пароль" );
} 
else if (login === '' || login === null) {
  alert( "Отменено" );
} else {
  alert( "Я вас не знаю" );
}