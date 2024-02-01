const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const object = {};
  word1.split("").forEach((term) => (object[term] = ++object[term] || 0));
  word2.split("").forEach((term) => {
    if (object[term] === undefined) return;
    else if (object[term] === 0) delete object[term];
    else object[term] -= object[term];
  });

  return Object.keys(object).length === 0;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
