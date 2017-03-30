var PhoneNumber = function(digits){
  this.digits = digits
}

PhoneNumber.prototype.number = function() {

  var answer = ''
  var strippedNumber = this.digits.replace(/\D/g,'')

  if (strippedNumber.length === 10) {
    answer = strippedNumber
  } else if (strippedNumber.length === 11 && strippedNumber.charAt(0) === '1') {
    answer = strippedNumber.substring(1)
  } else {
    answer = '0000000000'
  }
  this.digits = answer
  return answer

}

PhoneNumber.prototype.areaCode = function() {

  return this.digits.slice(0,3)

}

PhoneNumber.prototype.toString = function() {

  return '(' + this.digits.slice(0,3) + ') ' + this.digits.slice(3,6) + '-' + this.digits.slice(6,10)

}

module.exports = PhoneNumber;
