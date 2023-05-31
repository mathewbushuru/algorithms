function binarySearch(array, target) {
  // lowest index of search space
  let low = 0;
  // highest index of search space
  let high = array.length - 1;

  while (low <= high) {
    // find the middle index
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      // target element found at middle index
      return mid;
    } else if (array[mid] < target) {
      // update lower bound to search in right half
      low = mid + 1;
    } else {
      // update upper bound to search in lower half
      high = mid - 1;
    }
  }

  // if we reach here, target was not found
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// 3
console.log(binarySearch(arr, 4));
