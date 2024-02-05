const BubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1])
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
    }
  }
  return array;
};

console.log(BubbleSort([37, 45, 29, 8])); // [8, 29, 37, 45]
