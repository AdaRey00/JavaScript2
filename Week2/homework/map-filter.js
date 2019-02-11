'use strict';
//1.1 Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.
function doubleOddNumbers(myNumbers) {
  let oddNumbers = [];
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 !== 0) {
      oddNumbers.push(myNumbers[i] * 2);
    }
  }
  return oddNumbers;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

//Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.
const myOddNumbers = myNumbers.filter(myNumber => myNumber % 2 !== 0).map(myNumber => myNumber * 2);
console.log(myOddNumbers);
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
