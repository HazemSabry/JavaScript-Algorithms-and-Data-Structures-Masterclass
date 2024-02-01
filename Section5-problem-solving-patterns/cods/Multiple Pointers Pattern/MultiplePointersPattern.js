const sumZero = (array) => {
  let first = 0;
  let second = array.length - 1;
  while (first < second) {
    if (array[first] + array[second] === 0)
      return [array[first], array[second]];
    else if (Math.abs(array[first]) > Math.abs(array[second])) first++;
    else if (Math.abs(array[first]) < Math.abs(array[second])) second--;
  }
};

console.log(sumZero([-3, -2, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
