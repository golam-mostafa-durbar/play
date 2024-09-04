const revString = (str) => {
    if (str.length === 1) {
        return str;
    }

    return revString(str.slice(1)) + str[0];
}

const str = "abcdefghij";
console.log(revString(str));