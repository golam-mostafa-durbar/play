function removeDuplicates(arr) {
    const set = new Set(arr);
    return [...set];
}

const removeDuplicatesCustom = (arr) => {
    const uniqueArr = [];

    for(let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }

    return uniqueArr;
}

let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));
console.log(removeDuplicatesCustom(arr));