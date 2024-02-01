const maxSubarraySum = (array, numberOfSubarraySum) => {
  if (array.length < numberOfSubarraySum) return null;

  let maxSum = -Infinity;
  for (let i = 0; i <= array.length - numberOfSubarraySum; i++) {
    let sum = 0;
    for (let j = i; j < i + numberOfSubarraySum; j++) {
      sum += array[j];
    }
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
