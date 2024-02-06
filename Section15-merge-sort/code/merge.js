const merge = (sortedArray1, sortedArray2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  const sortedArray = [];
  let arrayPointer = 0;
  while (pointer1 < sortedArray1.length && pointer2 < sortedArray2.length) {
    if (sortedArray1[pointer1] <= sortedArray2[pointer2])
      sortedArray[arrayPointer++] = sortedArray1[pointer1++];
    else sortedArray[arrayPointer++] = sortedArray2[pointer2++];
  }

  while (pointer1 < sortedArray1.length)
    sortedArray[arrayPointer++] = sortedArray1[pointer1++];
  while (pointer2 < sortedArray2.length)
    sortedArray[arrayPointer++] = sortedArray2[pointer2++];

  return sortedArray;
};

console.log(merge([1, 2, 5, 17, 24], [2, 10, 25, 30, 40, 50]));
