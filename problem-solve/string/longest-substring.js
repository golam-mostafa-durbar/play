// find the length of the longest substring without repeating characters

const lengthOfLongestSubstring = (str) => {
  let sub = "";
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (sub.includes(str[i])) {
      max = sub.length > max ? sub.length : max;
      sub = "";
    }

    sub += str[i];
  }

  return max;
};

const str = "abccabcdebb";
console.log(lengthOfLongestSubstring(str)); // 4
