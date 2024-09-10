const firstNonRepeatingCharacter = (s) => {
    let frequency = {};

    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char of s) {
        if (frequency[char] === 1) {
            return char;
        }
    }
    
    return null;
}

let s = "swiss";
let nonRepeatingChar = firstNonRepeatingCharacter(s);
console.log(nonRepeatingChar); // Output: 'w'
