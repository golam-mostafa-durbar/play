const findPairsWithSum = (arr, sum) => {
    let pairs = [];
    let set = new Set();
    
    for(let num of arr) {
        const complement = sum - num;
        
        if (set.has(complement)) {
            pairs.push([complement, num]);
        } 
        
        set.add(num);
    }
    
    return pairs;
    
}

let arr = [1, 2, 3, 4, 5, 6];
let sum = 7;
let pairs = findPairsWithSum(arr, sum);
console.log(pairs); // Output: [[1, 6], [2, 5], [3, 4]]
