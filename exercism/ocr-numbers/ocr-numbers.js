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
    default:
        return '?'
  }



};

module.exports = Ocr;
