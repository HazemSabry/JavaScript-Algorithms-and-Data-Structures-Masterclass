const countUniqueValues = (array) => {
  if (array.length === 0) return 0;
  else if (array.length === 1) return 1;
  let first = 0;
  let second = 1;
  let numberOfUniqueValues = 1;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[first] !== array[second]) numberOfUniqueValues++;
    first = second;
    second++;
  }

  return numberOfUniqueValues;
};

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
