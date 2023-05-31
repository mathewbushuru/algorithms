var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // right half not sorted, so pivot in right
      left = mid + 1;
    } else {
      // right half sorted, so pivot (and min number) in left half, including mid
      right = mid;
    }
  }

  // at end of loop, left == right, at index of min number
  return nums[left];
};

const nums1 = [3, 4, 5, 1, 2];
// 1
console.log(findMin(nums1));

const nums2 = [4, 5, 6, 7, 0, 1, 2];
// 0
console.log(findMin(nums2));

const nums3 = [11, 13, 15, 17];
// 11
console.log(findMin(nums3));
