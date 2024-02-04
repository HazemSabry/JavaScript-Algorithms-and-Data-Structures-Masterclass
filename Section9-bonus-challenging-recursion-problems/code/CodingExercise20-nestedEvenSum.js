// nestedEvenSum

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = (nestedObject) => {
  let evenSum = 0;

  const helperFunction = (object) => {
    for (let key in object) {
      if (typeof object[key] === "object") helperFunction(object[key]);
      else if (typeof object[key] === "number" && object[key] % 2 === 0)
        evenSum += object[key];
    }
  };

  helperFunction(nestedObject);
  return evenSum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
