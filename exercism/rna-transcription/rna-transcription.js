var dnaTranscriber = function() {};

var letter = ''

dnaTranscriber.prototype.toRna = function (letter) {

  let opposite = ''

  for (var i = 0; i < letter.length; i++) {

    switch(letter[i]) {
      case 'G':
        opposite += 'C'
        break;
      case 'C':
        opposite += 'G'
        break;
      case 'T':
        opposite += 'A'
        break;
      case 'A':
        opposite += 'U'
        break;
      default:
        throw 'Invalid input'
    }
  }
      return opposite
}

module.exports = dnaTranscriber
