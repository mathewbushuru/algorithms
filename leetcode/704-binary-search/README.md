**Leetcode 704 (Easy) - [Binary Search](https://leetcode.com/problems/binary-search/)**

> Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

> You must write an algorithm with `O(log n)` runtime complexity.

> Input: `nums = [-1,0,3,5,9,12]`, `target = 9`
> Output: `4`
> Explanation: `9 exists in nums and its index is 4`

Solution

`JavaScript`

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
```

Time complexity: `O(log(n))`