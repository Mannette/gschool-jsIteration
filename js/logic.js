/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/

//var prices = Array.from()
function sumAll() {
  var total = 0;
  // result = options +=;
  // return result;
  for (var i = 0; i < allPrices[0].length; i++) {
    total += parseInt(allPrices[0][i].value);
  }
  console.log(total);
  return total;
}

function countSelected() {
  var counted = allPrices[0].selectedOptions.length;
  console.log(counted);
  return counted;
}
