// Given two strings, determine if they are anagrams (contain the same characters with the same frequencies).

const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let count = {};

    for(let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of str2) {
        if (!count[char]) return false;

        count[char]--;
    }

    return true;
}

const str1 = "listened";
const str2 = "silented";
console.log(areAnagrams(str1, str2));    // true