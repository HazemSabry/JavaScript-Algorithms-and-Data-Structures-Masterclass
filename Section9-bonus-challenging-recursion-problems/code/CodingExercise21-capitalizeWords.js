// capitalizeWords

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizeWords = (arrayOfWords) => {
  const capitalizeWordsArray = [];

  const helperFunction = (array) => {
    if (array.length === 0) return;
    capitalizeWordsArray.push(array[0].toUpperCase());
    helperFunction(array.slice(1));
  };

  helperFunction(arrayOfWords);
  return capitalizeWordsArray;
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
