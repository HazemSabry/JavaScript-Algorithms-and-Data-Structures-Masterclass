// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

const findLongestSubstring = (string) => {
  const stringArray = string.split("");
  const object = {};
  let pointerToStart = 0;
  let pointerToNextCharacter = 0;
  let longestSubstringLen = 0;

  while (stringArray[pointerToNextCharacter]) {
    if (object[stringArray[pointerToNextCharacter]] === undefined) {
      object[stringArray[pointerToNextCharacter++]] = 1;
      if (pointerToNextCharacter - pointerToStart > longestSubstringLen)
        longestSubstringLen = pointerToNextCharacter - pointerToStart;
    } else {
      delete object[stringArray[pointerToStart++]];
    }
  }

  return longestSubstringLen;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
