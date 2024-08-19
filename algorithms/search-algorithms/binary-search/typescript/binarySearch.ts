function binarySearch(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;

console.log(binarySearch(arr, target));
