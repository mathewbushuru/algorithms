function mergeSort(arr) {
  // base case
  if (arr.length < 2) {
    return arr;
  }

  // divide array into two
  const leftArr = arr.slice(0, arr.length / 2);
  const rightArr = arr.slice(arr.length / 2);

  // sort each half array
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  // merge sorted left and right arrays
  const sortedArr = mergeSortedArrays(sortedLeft, sortedRight);

  return sortedArr;
}

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const sortedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i += 1;
    } else {
      sortedArr.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j += 1;
  }

  return sortedArr;
}

const arr = [2, 4, 9, 6, 1, 8, 3, 5, 7];
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort(arr));
