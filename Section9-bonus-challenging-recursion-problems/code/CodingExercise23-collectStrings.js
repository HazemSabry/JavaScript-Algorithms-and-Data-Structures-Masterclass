// collectStrings

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const collectStrings = (object) => {
  const stringArray = [];

  const helperFunction = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") helperFunction(obj[key]);
      else if (typeof obj[key] === "string") stringArray.push(obj[key]);
    }
  };

  helperFunction(object);
  return stringArray;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
