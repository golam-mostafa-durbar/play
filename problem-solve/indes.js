const wordPattern = (pattern, s) => {
  const count = {};
  const arr = s.split(" ");

  if (pattern.length !== arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const word = arr[i];
    const ch = pattern[i];

    if (!count[ch]) {
      if (i > 0) {
        const values = Object.values(count);
        if (values.includes(word)) return false;
      }

      count[ch] = word;
    } else {
      if (count[ch] !== word) return false;
    }
  }

  return true;
};

const pattern = "abba",
  s = "dog dog dog dog";

console.log(wordPattern(pattern, s));
