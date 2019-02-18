'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
var myUniqueArray = [];
  arr.forEach(function(element) {
    if (myUniqueArray.indexOf(element) === -1) {
      myUniqueArray.push(element);
    }
  });
  return myUniqueArray;
}


const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
