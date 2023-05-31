/**
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
 */

var searchRange = function (nums, target) {
  const result = [-1, -1];

  //binary search to find first index
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  //  found start index, check if it actually exists in nums
  if (nums[start] !== target) {
    return result;
  }

  result[0] = start;

  // binary search 2 to find end index
  end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  result[1] = end

  return result
};

// [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// [-1,-1]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

// [-1,-1]
console.log(searchRange([], 6));