const findKthLargestElement = (arr, k) => {
    const sort = arr.sort((a, b) => b - a);

    return sort[k-1];
}


let arr = [3, 2, 1, 5, 6, 4, 7];
let k = 2;
let kthLargest = findKthLargestElement(arr, k);
console.log(kthLargest); // Output: 6