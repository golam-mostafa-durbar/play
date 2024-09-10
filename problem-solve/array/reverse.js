const revArr = (arr) => {
    const len = arr.length;

    for(let i=0; i < len/2; i++) {
        const temp = arr[i];
        arr[i] = arr[len-1 - i];
        arr[len-1 - i] = temp;
    }

    return arr;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(revArr(arr));

