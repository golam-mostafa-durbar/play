const secondLargest = (arr) => {
    let max1 = arr[0];
    let max2 = arr[1];
    
    if (max2 > max1) {
        max1 = arr[1];
        max2 = arr[0];
    }
    
    for(let i=2; i < arr.length; i++) {
        if (arr[i] > max1) {
            const temp = max1;
            max1 = arr[i];
            max2 = temp;
        } else if(arr[i] > max2 && arr[i] < max1) {
            max2 = arr[i];
        }
    }
    
    return max2;
}

let arr = [1, 3, 4, 12, 15, 2, 2];
console.log(secondLargest(arr)); // Output: 12