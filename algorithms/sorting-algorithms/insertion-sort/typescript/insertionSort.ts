function insertionSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    const currVal = array[i];

    let j: number = i - 1;
    while (j >= 0 && array[j] > currVal) {
      array[j + 1] = array[j];
      j -= 1;
    }

    array[j + 1] = currVal;
  }
  return array;
}

const arr: number[] = [9, 3, 5, 1, 7, 2, 8, 4];
const sortedArr: number[] = insertionSort(arr);

// [1, 2, 3, 4, 5, 7, 8, 9]
console.log(sortedArr);
