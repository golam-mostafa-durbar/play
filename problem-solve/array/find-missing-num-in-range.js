const findMissingNumberInRange = (arr, n) => {
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = arr.reduce((acc, val) => acc + val, 0);

    return totalSum - arraySum;
}

let arr = [1, 2, 4, 5, 6];
let n = 6 || arr.length + 1;
let missingNumber = findMissingNumberInRange(arr, n);
console.log(missingNumber); // Output: 3