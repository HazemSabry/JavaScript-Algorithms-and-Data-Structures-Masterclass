const merge = (sortedArray1, sortedArray2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  const sortedArray = [];
  while (pointer1 < sortedArray1.length && pointer2 < sortedArray2.length) {
    if (sortedArray1[pointer1] <= sortedArray2[pointer2])
      sortedArray.push(sortedArray1[pointer1++]);
    else sortedArray.push(sortedArray2[pointer2++]);
  }

  while (pointer1 < sortedArray1.length)
    sortedArray.push(sortedArray1[pointer1++]);
  while (pointer2 < sortedArray2.length)
    sortedArray.push(sortedArray2[pointer2++]);

  return sortedArray;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let leftHalf = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
  let rightHalf = mergeSort(array.slice(Math.ceil(array.length / 2)));

  return merge(leftHalf, rightHalf);
};

console.log(mergeSort([3, 1, 4, 1, 5, 2, 1, 4, 6, 11, 4, 67, 32]));
