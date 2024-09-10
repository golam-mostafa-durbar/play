// find the length of the longest substring without repeating characters
const lengthOfLongestSubstring = (s) => {
  let set = new Set();

  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    while (set.has(ch)) {
      set.delete(s[left]);
      left++;
    }

    set.add(ch);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

const str = "abccabcdebb";
console.log(lengthOfLongestSubstring(str)); // 5
