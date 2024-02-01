const same = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  loop1: for (term1 in array1) {
    for (term2 in array2) {
      if (term2 == array2.length - 1 && array2[term2] === null) return false;
      else if (array2[term2] === null) continue;
      else if (array2[term2] === Math.pow(array1[term1], 2)) {
        array2[term2] = null;
        continue loop1;
      } else if (term2 === array2.length - 1) return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
