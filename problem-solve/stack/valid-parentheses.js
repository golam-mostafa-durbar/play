const isValid = (s) => {
  const stack = [];
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let ch of s) {
    if (pair[ch]) {
      stack.push(pair[ch]);
    } else {
      if (stack.pop() !== ch) return false;
    }
  }

  return stack.length === 0;
};

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
