const naiveStringSearch = (string, pattern) => {
  let counter = 0;
  const stringArray = string.split("");
  const patternArray = pattern.split("");
  for (let i = 0; i < stringArray.length - pattern.length + 1; i++) {
    for (let j = 0; j < patternArray.length; j++) {
      if (stringArray[i + j] !== patternArray[j]) break;
      if (j === patternArray.length - 1) counter++;
    }
  }
  return counter;
};

console.log(naiveStringSearch("lorie loled", "lol")); //1
console.log(naiveStringSearch("lorie loled", "lo")); //2
console.log(naiveStringSearch("hello, haha, what ever", "haha")); //1
