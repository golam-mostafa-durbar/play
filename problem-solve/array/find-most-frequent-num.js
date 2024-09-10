const findMostFrequentNum = (arr) => {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentNum = arr[0];

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequentNum = num;
        }
    }

    return mostFrequentNum;
}

let arr = [1, 3, 2, 1, 4, 1, 2, 3, 2, 1, 2, 2];
console.log(findMostFrequentNum(arr));