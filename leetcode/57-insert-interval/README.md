**Leetcode 57 (Medium) - [Insert Interval](https://leetcode.com/problems/insert-interval/)**

> You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

> Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary)

> Return `intervals` after the insertion.

> Input: `intervals = [[1,3],[6,9]]`, `newInterval = [2,5]`
> Output: `[[1,5],[6,9]]`

> Input: `intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]`, `newInterval = [4,8]`
> Output: `[[1,2],[3,10],[12,16]]`
> Explanation: `Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]`.

Solution

`JavaScript`

```js
var insert = function (intervals, newInterval) {
  const mergedIntervals = [];
  let i = 0;

  // iterate through  each interval
  while (i < intervals.length) {
    if (intervals[i][1] < newInterval[0]) {
      // current interval ends before newInterval starts (to its left)
      mergedIntervals.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      // current interval starts after newInterval ends ( to its right)
      break;
    } else {
      // current interval overlaps with newInterval
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    }

    i += 1;
  }

  // Insert new (possibly merged) interval
  mergedIntervals.push(newInterval);

  // insert remaining intervals
  while (i < intervals.length) {
    mergedIntervals.push(intervals[i]);
    i += 1;
  }

  return mergedIntervals;
};

// [ [ 1, 5 ], [ 6, 9 ] ]
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

// [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
```

Time complexity: `O(n)` where `n` is the number of intervals. We visit each interval at most once and do a constant amount of work each visit.

Space complexity: `O(n)`