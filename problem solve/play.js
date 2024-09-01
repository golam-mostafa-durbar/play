const lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let max = 0;

    if (s.length === 1) {
        return 1;
    }

    for(let i=0; i < s.length; i++) {
        const ch = s[i];

        if (map.has(ch)) {
            i = map.get(ch) + 1;

            map.clear();
            map.set(s[i], i);
        } else {
            map.set(ch, i);

            if (map.size > max) {
                max = map.size;
            }
        }
    }

    return max;
};

const s = "abcaadbacd";
const res = lengthOfLongestSubstring(s);

console.log(res);