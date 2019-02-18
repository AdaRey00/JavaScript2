'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/* In the first function:
- The variable x is assign to 9, the function increment 9 to 10. But since x is a const variable when console.log calls for x, the function prints out the const variable value which is 9.
 In the second function: 
- variable y is an object, the function use the key x to change the value of 9. It increment it to 10 and assign it to x. when the console.log calls for y, variable y finds the x and the value 10 which is assigned to it. */

