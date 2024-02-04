// capitalizeFirst

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = (arrayOfString) => {
  const capitalizeFirstArray = [];

  const helperFunction = (array) => {
    if (array.length <= 0) return;
    capitalizeFirstArray.push(array[0][0].toUpperCase() + array[0].slice(1));
    helperFunction(array.slice(1));
  };

  helperFunction(arrayOfString);
  return capitalizeFirstArray;
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
