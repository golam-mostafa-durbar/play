const frequency = (str) => {
    const count = {};

    
    for(let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    
    return count;
}

const str = "ababcdefe";
console.log((frequency(str)));