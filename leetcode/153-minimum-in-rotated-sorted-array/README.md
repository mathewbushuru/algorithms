**Leetcode 153 (Medium) - [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)**

> Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

> `[4,5,6,7,0,1,2]` if it was rotated 4 times.
> `[0,1,2,4,5,6,7]` if it was rotated 7 times.

> Notice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

> Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in `O(log n)` time.

> Input: `nums = [3,4,5,1,2]`
> Output: `1`
> Explanation: `The original array was [1,2,3,4,5] rotated 3 times`.

> Input: `nums = [4,5,6,7,0,1,2]`
> Output: `0`
> Explanation: `The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.`

> Input: `nums = [11,13,15,17]`
> Output: `11`
> Explanation: `The original array was [11,13,15,17] and it was rotated 4 times. `

Algorithm: Use binary search to locate the pivot point of the rotated array. Since `nums` is rotated from a sorted array, the number next to the pivot is the minimum

Solution

<!-- ![153](./leetcode/imgs/153.jpeg) -->

`JavaScript`

```js
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
```

Time complexity: `O(log(n))`