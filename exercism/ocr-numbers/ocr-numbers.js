var Ocr = function(){};

Ocr.prototype.convert = function(weirdNumber) {



switch (weirdNumber) {
  case
    ' _ \n' +
    '| |\n' +
    '|_|\n' +
    '   ':
      return '0'
      break;
  case
    '   \n' +
    '  |\n' +
    '  |\n' +
    '   ':
      return '1'
      break;
  case
    ' _ \n' +
    ' _|\n' +
    '|_ \n' +
    '   ':
      return '2'
      break;
  case
    ' _ \n' +
    ' _|\n' +
    ' _|\n' +
    '   ':
      return '3'
      break;
  case
    '   \n' +
    '|_|\n' +
    '  |\n' +
    '   ':
      return '4'
      break;
  case
    ' _ \n' +
    '|_ \n' +
    ' _|\n' +
    '   ':
      return '5'
      break;
  case
    ' _ \n' +
    '|_ \n' +
    '|_|\n' +
    '   ':
      return '6'
      break;
  case
    ' _ \n' +
    '  |\n' +
    '  |\n' +
    '   ':
      return '7'
      break;
  case
    ' _ \n' +
    '|_|\n' +
    '|_|\n' +
    '   ':
      return '8'
      break;
  case
    ' _ \n' +
    '|_|\n' +
    ' _|\n' +
    '   ':
      return '9'
      break;
}



};

module.exports = Ocr;

//   var numbers = {
//
//     0 :
//         ' _ \n' +
//         '| |\n' +
//         '|_|\n' +
//         '   ',
//     1 :
//         '   \n' +
//         '  |\n' +
//         '  |\n' +
//         '   ',
//     2 :
//         ' _ \n' +
//         ' _|\n' +
//         '|_ \n' +
//         '   ',
//     3 :
//         ' _ \n' +
//         ' _|\n' +
//         ' _|\n' +
//         '   ',
//     4 :
//         '   \n' +
//         '|_|\n' +
//         '  |\n' +
//         '   ',
//     5 :
//         ' _ \n' +
//         '|_ \n' +
//         ' _|\n' +
//         '   ',
//     6 :
//         ' _ \n' +
//         '|_ \n' +
//         '|_|\n' +
//         '   ',
//     7 :
//         ' _ \n' +
//         '  |\n' +
//         '  |\n' +
//         '   ',
//     8 :
//         ' _ \n' +
//         '|_|\n' +
//         '|_|\n' +
//         '   ',
//     9 :
//         ' _ \n' +
//         '|_|\n' +
//         ' _|\n' +
//         '   '
// }
//
//   if (weirdNumber === numbers[0]) {
//     return '0'
// } else if (weirdNumber === numbers[1]) {
//     return '1'
// };
