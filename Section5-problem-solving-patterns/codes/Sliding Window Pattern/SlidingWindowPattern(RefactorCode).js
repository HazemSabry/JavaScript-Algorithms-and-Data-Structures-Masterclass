const maxSubarraySum = (array, numberOfSubarraySum) => {
  if (array.length < numberOfSubarraySum) return null;

  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < numberOfSubarraySum; i++) maxSum += array[i];
  sum = maxSum;
  for (let i = numberOfSubarraySum; i < array.length; i++) {
    sum = sum - array[i - numberOfSubarraySum] + array[i];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
