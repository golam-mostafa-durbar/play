const reverseString = (s) => {
  const stack = [];

  for (let ch of s) {
    stack.push(ch);
  }

  let revStr = "";

  while (stack.length > 0) {
    revStr += stack.pop();
  }

  return revStr;
};

// Example usage:
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("stack")); // "kcats"
