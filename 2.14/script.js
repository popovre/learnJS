// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = 'Edge';

browser == 'Edge' ? alert("You've got the Edge!") :
browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera' ? 'Okay we support these browsers too' :
alert( 'We hope that this page looks ok!' );