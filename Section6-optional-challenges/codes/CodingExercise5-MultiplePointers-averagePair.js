// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const averagePair = (sortedArray, targetAverageOfPair) => {
  if (sortedArray.length === 0 || sortedArray.length === 1) return false;

  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    if ((sortedArray[left] + sortedArray[right]) / 2 === targetAverageOfPair)
      return true;
    if ((sortedArray[left] + sortedArray[right]) / 2 > targetAverageOfPair)
      right--;
    if ((sortedArray[left] + sortedArray[right]) / 2 < targetAverageOfPair)
      left++;
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
