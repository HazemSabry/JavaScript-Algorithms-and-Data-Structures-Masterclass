const pivotHelper = (array, startIndex, endIndex) => {
  let pivot = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[startIndex]) {
      pivot++;
      [array[i], array[pivot]] = [array[pivot], array[i]];
    }
  }

  [array[startIndex], array[pivot]] = [array[pivot], array[startIndex]];

  return pivot;
};

const array = [10, 8, 13, 1, 5, 2, 56, 6];
console.log(pivotHelper(array, 0, array.length - 1));
