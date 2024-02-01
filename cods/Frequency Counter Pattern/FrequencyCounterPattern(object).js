const same = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  const object = {};
  array2.forEach(
    (term) => (object[Math.sqrt(term)] = ++object[Math.sqrt(term)] || 0)
  );
  array1.forEach((term) => {
    if (object[term] === undefined) return;
    else if (object[term] === 0) delete object[term];
    else if (object[term] !== 0) object[term] -= 1;
  });
  return Object.keys(object).length === 0;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
