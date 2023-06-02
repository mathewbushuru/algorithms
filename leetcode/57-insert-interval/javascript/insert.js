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
console.log(insert([[1, 3],[6, 9]],[2, 5]));

// [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
