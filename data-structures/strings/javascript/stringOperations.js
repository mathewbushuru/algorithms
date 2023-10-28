/**
 * declaration / initialization
 */
let str1 = "This is a string";
let str2 = 'This is also a string';
let str3 = `Template literal string, ${str1}`;

/**
 * accessing characters
 */
let char = str1[5];
console.log(char); // 5 

/**
 * string length
 */
let len = str1.length;
console.log(len);   // 16

/**
 * finding a substring
 */
// first occurrence, -1 if not found - 17
let position = str3.indexOf("string");
console.log(position); 
// last occurrence - 35
let lastPosition = str3.lastIndexOf("string");
console.log(lastPosition);
// checking substring existence - true
let exists = str1.includes("string");
console.log(exists);

/**
 * substring, substr, slice
 */
// substring(start, end);
// extract characters from start to (end - 1) - 'is a s'
let sub = str1.substring(5, 11);
console.log(sub);
// slice(start, end);
// similar to substring but can accept negative indices - 'is a strin'
let sub2 = str1.slice(5, -1);
console.log(sub2);

/**
 * string manipulation
 */
// concatenation
let concatedStr = str1 + " " + str2;
console.log(concatedStr);
let concatedStr2 = str1.concat(str2);
console.log(concatedStr2);
// template literals
let name = "Matt";
let greeting = `Hello ${name}!`;
console.log(greeting);
// changing case
let upper = str1.toUpperCase();
console.log(upper);
let lower = str1.toLowerCase();
console.log(lower);
// trimming spaces at start and end
let trimmed = "    extra spaces     ".trim();
console.log(trimmed);

/**
 * splitting and joining
 */
// split(delimiter); - string into an array
let words = str1.split(" ");
console.log(words);
// join(delimiter); - array into string
let sentence = words.join(" ");
console.log(sentence);

/**
 * replacing text
 */
let replaced = str1.replace("string", "replacedString");
console.log(replaced);