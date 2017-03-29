var Hamming = function() {};

diff = 0;

Hamming.prototype.compute = function(input1, input2) {

    for (i = 0; i < input1.length; i++) {
      if (input1[i] != input2[i]) {
        diff = diff + 1;
      }
    }
    return diff;
  };

module.exports = Hamming;
