const QuickSort = (array, startIndex, endIndex) => {
  if (startIndex >= endIndex) return;
  let pivot = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[startIndex]) {
      pivot++;
      [array[i], array[pivot]] = [array[pivot], array[i]];
    }
  }

  [array[startIndex], array[pivot]] = [array[pivot], array[startIndex]];

  QuickSort(array, startIndex, pivot - 1);
  QuickSort(array, pivot + 1, endIndex);
  return array;
};

const array = [10, 8, 13, 1, 5, 2, 56, 6];
console.log(QuickSort(array, 0, array.length - 1));
