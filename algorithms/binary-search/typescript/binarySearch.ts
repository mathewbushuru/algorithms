function binarySearch(array: number[], target: number): number {
  let low: number = 0;
  let high: number = array.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

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

const arr: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
const target: number = 10;

console.log(binarySearch(arr, target));
