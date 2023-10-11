**Leetcode 34 (Medium) - [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)**

> Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

> If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

> Input: `nums = [5,7,7,8,8,10]`, `target = 8`
> Output: `[3,4]`

> Input: `nums = [5,7,7,8,8,10]`, `target = 6`
> Output: `[-1,-1]`

> Input: `nums = []`, `target = 0`
> Output: `[-1,-1]`

Algorithm: Use binary search due to the requirement of `O(log(n))` complexity and since the array is already sorted.

Solution

<!-- ![34](./leetcode/imgs/34.jpeg) -->

`JavaScript`

```js
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

  result[1] = end;

  return result;
};

// [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
```

Time complexity: `O(log(n))`

Space complexity: `O(1)`