const BubbleSort = (array) => {
  let noSwaps;
  for (let i = 0; i < array.length; i++) {
    noSwaps = true;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

console.log(BubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]
