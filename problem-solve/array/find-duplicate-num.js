const findDuplicateNumber = (arr) => {
    const count = {};
    let res;
    
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    
    for(item in count) {
        if (count[item] === 2) {
            res = item;
            break;
        }
    }
    
    return res;
}

let arr = [1, 3, 4, 2, 3];
let duplicate = findDuplicateNumber(arr);
console.log(duplicate); // Output: 2