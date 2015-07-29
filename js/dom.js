/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
// // targets answer div
// var appendTo = document.getElementById('Answer');
// // for sumAll function
// // sets prices equal to option object
// var prices = document.getElementsByTagName('option');
// // targets Sum All button. Runs sumAll function when clicked.
// var sumFunction = document.getElementById('sum-all').addEventListener('click', function(){sumAll();});
//
//
//
// // for countSelected function
// document.getElementById('count-selected').addEventListener('click', function(){countSelected();});

var writeAnswer = document.getElementById('Answer');

var allPrices = document.getElementsByClassName('all-prices');

document.getElementById('sum-all').addEventListener('click', function(){writeAnswer.innerHTML = sumAll();});

document.getElementById('count-selected').addEventListener('click', function(){writeAnswer.innerHTML = countSelected();});
