const mergeSortedArrays = (arr1, arr2) => {
    let merged = [];
    let i = 0, j = 0;

    while( i < arr2.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

let arr1 = [1, 3, 5, 9];
let arr2 = [2, 4, 6, 7, 8];
let merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5,6, 7, 8, 9]
