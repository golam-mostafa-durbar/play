const lengthOfLongestSubstring = function(s) {
    const arr = [];
    let max = 0;

    if (s.length === 1) {
        return 1;
    }

    for(let i=0; i<s.length; i++) {
        const ch = s[i];

        if (arr.includes(ch)) {
            i = s.indexOf(ch) + 1;

            arr.length = 0;
            arr.push(s[i]);
        } else {
            arr.push(ch);

            if (arr.length > max) {
                max = arr.length;
            }
        }
    }

    return max;
};

const s = "abcaadbacd";
const res = lengthOfLongestSubstring(s);

console.log(res);