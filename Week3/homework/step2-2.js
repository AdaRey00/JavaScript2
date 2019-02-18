'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number);
    if (number % 3 === 0) {
      sayThree(number);
    }
    if (number % 5 === 0) {
      sayFive(number);
    }
  }

  console.log(numbers);
}

function sayThree(number) {
  console.log(sayThree);
}

function sayFive(number) {
  console.log(sayFive);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
