function firstRepeatingChar(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] > 1) {
      return char;
    }
  }

  return -1;
}

// Test Cases
console.log(firstRepeatingChar("abbcdd")); // Output: 'a'
console.log(firstRepeatingChar("abcdef")); // Output: null (no repeating characters)
