var BeerSong = function(){};

BeerSong.prototype.verse = function (amount) {

  var answer = ''
  var string1 = ' bottles of beer on the wall, '
  var string2 = ' bottles of beer.\nTake one down and pass it around, '
  var string3 = ' bottles of beer on the wall.\n'
  var string11 = ' bottle of beer on the wall, '
  var string31 = ' bottle of beer on the wall.\n'
  var string22 = ' bottle of beer.\nTake it down and pass it around, '
  var noMore = 'no more bottles of beer on the wall.\n'
  var zeroBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

  if (amount === 2) {
  answer = (amount + string1 + amount + string2 + (amount - 1) + string31)
  } else if (amount === 1) {
    answer = (amount + string11 + amount + string22 + noMore)
    } else if (amount === 0) {
      answer = zeroBottles
    } else {
      answer = (amount + string1 + amount + string2 + (amount - 1) + string3)
      }
    return answer
};

module.exports = BeerSong;


// var BeerSong = function(){};
//
// BeerSong.prototype.sing = function(start, stop) {
//
//   var song = ''
//
//   var string1 = " bottles of beer on the wall, "
//   var string2 = " bottles of beer.\nTake one down and pass it around, "
//   var string3 = " bottles of beer on the wall.\n"
//   var string4 = " bottle of beer on the wall.\n"
//
//   if ( stop === undefined ) {
//     stop = 0
//   }
//
//   while ( start > stop ) {
//     song += start + string1 + start + string2 + (start - 1) + string3
//     start--
//   }
//
//   if ( start === 0) {
//     song += 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
//   }
//
//
// module.exports = BeerSong;




//   if (stop === undefined) {
//     stop = 0;
//   } else {
//     while (start > stop) {
//       song += (start + ' bottles of beer on the wall ' + start + ' bottles of beer.\n Take one down and pass it around, ' + (start - 1) + ' bottles of beer on the wall.\n\n');
//       start--;
//     }
//
//     if (start === stop) {
//       song += ('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
//       return song;
//     }
//   }
// }
//
// console.log(BeerSong(8,6));
