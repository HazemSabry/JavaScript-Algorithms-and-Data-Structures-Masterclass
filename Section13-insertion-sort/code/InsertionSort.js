const InsertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]];
        target--;
      } else break;
    }
  }

  return array;
};

console.log(InsertionSort([4, 1, 45, 2, 56, 3, 66, 54])); //[1, 2, 3, 4, 45, 54, 56, 66]
