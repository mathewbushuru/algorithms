/**
 * Declaration
 */
const arr = []; // empty array
const arrWithValues = [1, 2, 3, 4, 5]; // Array  with values
const arrWithSize = new Array(5); // Array with size
const arrWithSizePrefilled  = new Array(100).fill(-1);

/**
 * Accessing elements
 */
let firstElement = arrWithValues[0]; // 1

/**
 * Setting elements
 */
arrWithValues[0] = 100;

/**
 * Array length
 */
const length = arrWithValues.length;

/**
 * Iterating over arrays
 */
for (let value of arrWithValues) {
  console.log(value);
}
for (let i = 0; i < arrWithValues.length; i++) {
  console.log(arrWithValues[i]);
}

/**
 * Multi-dimensional arrays
 */
const multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArray[1][2]); // 6

/**
 * Common methods
 */
// add to end
arrWithValues.push(200);

// remove from end
arrWithValues.pop();

// add to beginning
arrWithValues.unshift(10);

// remove from beginning
let firstItem = arrWithValues.shift();

// slice array - creates new array object not including end
let start = 0;
let end = 3;
const newArr = arrWithValues.slice(start, end);
console.log(arrWithValues);
console.log(newArr);

// splice array - add, remove or replace existing elements in place
const months = ["Jan", "Mar", "Apr", "Jun"];
console.log(months);
let startIndex = 1;
let numOfElementsToRemove = 0;
months.splice(startIndex, numOfElementsToRemove, "Feb");
console.log(months)