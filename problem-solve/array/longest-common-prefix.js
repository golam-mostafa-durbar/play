const longestCommonPrefix = (arr) => {
    if(arr.length < 1) return "";

    let prefix = arr[0];

    for(let i=1; i < arr.length; i++) {
        const str = arr[i];

        while(!str.includes(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (!prefix) return "";
        }
    }

    return prefix;
}

const arr =  ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr));
