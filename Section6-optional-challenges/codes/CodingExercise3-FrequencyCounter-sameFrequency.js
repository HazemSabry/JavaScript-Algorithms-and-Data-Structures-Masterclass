// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
  const num1Array = num1.toString().split("");
  const num2Array = num2.toString().split("");
  if (num1Array.length !== num2Array.length) return false;

  const object = {};
  num2Array.forEach((term) => {
    object[term] = ++object[term] || 1;
  });

  for (let term of num1Array) {
    if (object[term] === undefined) return false;
    else if (object[term] === 0) return false;
    else object[term]--;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
