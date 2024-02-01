const countUniqueValues = (array) => {
  const object = {};
  array.forEach((value) => (object[value] = null));
  return Object.keys(object).length;
};

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
