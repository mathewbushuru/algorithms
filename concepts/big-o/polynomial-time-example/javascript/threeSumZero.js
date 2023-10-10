function threeSumZero(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }

  return null;
}

const sampleArray = [-1, 0, 1, 2, -1, -4];
console.log(threeSumZero(sampleArray));

function threeSumZeroBetter(arr) {
  // eg arr = [-1, 0, 1, 2, -1, -4]

  // sort the array - O(nlogn)
  // arr now [-4, -1, -1, 0, 1, 2]
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip duplicates
      continue;
    }

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        return [arr[i], arr[left], arr[right]];
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  // no triplet found
  return null;
}

// [ -1, -1, 2 ]
console.log(threeSumZeroBetter(sampleArray));

