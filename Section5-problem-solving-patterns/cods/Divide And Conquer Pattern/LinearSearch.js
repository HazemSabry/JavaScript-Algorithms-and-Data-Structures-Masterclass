const search = (array, value) => {
  for (index in array) {
    if (array[index] === value) return index;
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
