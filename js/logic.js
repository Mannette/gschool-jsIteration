/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/
//var prices = Array.from()
function sum(options) {
  var x = 0;
  // result = options +=;
  // return result;
  for (var i = 0; i < prices.length; i++) {
    x += parseInt(prices[i].value);
  }
  console.log(x);
}

function counter() {
  //
  var count = select.childElementCount;
}
