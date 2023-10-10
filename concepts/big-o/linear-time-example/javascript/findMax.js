function findMax(arr) {
    let maxVal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal){
            maxVal = arr[i];
        }
    }

    return maxVal;
}

const sampleArray = [3, 1, 4, 5, 9, 2, 6, 5];
// 9
console.log(findMax(sampleArray));