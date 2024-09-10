function firstNonRepeatingCharIndex(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1;
}

// Test Cases
console.log(firstNonRepeatingCharIndex("v2tech")); // Output: 2 (index of 'c')
console.log(firstNonRepeatingCharIndex("abcabc")); // Output: -1 (all characters repeat)
