/**
 * Declaration
 */
const arr = []; // empty array
const arrWithValues = [1, 2, 3, 4, 5]; // Array  with values
const arrWithSize = new Array(5); // Array with size

console.log(arr);
console.log(arrWithValues);
console.log(arrWithSize);

/**
 * Accessing elements
 */
let firstElement = arrWithValues[0]; // 1
console.log(firstElement);

/**
 * Setting elements
 */
arrWithValues[0] = 100;
console.log(arrWithValues);

/**
 * Array length
 */
const length = arrWithValues.length;
console.log(length);

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
console.log(multiArray);
console.log(multiArray[1][2]); // 6

/**
 * Common methods
 */
// add to end
arrWithValues.push(200);
console.log(arrWithValues);

// remove from end
arrWithValues.pop();
console.log(arrWithValues);

// add to beginning
arrWithValues.unshift(10);
console.log(arrWithValues);

// remove from beginning
let firstItem = arrWithValues.shift();
console.log(firstItem);
console.log(arrWithValues);

// slice array - creates new array object
let start = 0;
let end = 3;
const newArr = arrWithValues.slice(start, end);
console.log(newArr);
console.log(arrWithValues);
