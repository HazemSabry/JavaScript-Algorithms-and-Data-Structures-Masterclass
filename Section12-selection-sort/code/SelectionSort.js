const SelectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return array;
};

console.log(SelectionSort([4, 1, 4, 9, 10, 44, 1, 55])); // [1, 1, 4, 4, 9, 10, 44, 55 ]
console.log(SelectionSort([4, 1, 4, 9, 10, 7, 1, 0])); // [0, 1, 1, 4, 4, 7, 9, 10]
