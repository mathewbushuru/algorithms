**Leetcode 69 (Easy) - [Sqrt(x)](https://leetcode.com/problems/sqrtx/)**

> Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

> You must not use any built-in exponent function or operator. For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python

> Input: `x = 4`
> Output: `2`
> Explanation: `The square root of 4 is 2, so we return 2.`

> Input: `x = 8`
> Output: `2`
> Explanation: `The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.`

Algorithm: Use binary search to find, the largest int `mid` such that `mid * mid <= x`

Solution

<!-- ![69](./leetcode/imgs/69.jpeg) -->

`JavaScript`

```js
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  // sqrt(x) cannot be bigger than x/2 for any int x
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // exited loop without finding  exact square root
  // right  pointer holds floor value of square root
  return right;
};

// 2
console.log(mySqrt(4));

// 2
console.log(mySqrt(8));
```

Time complexity: `O(log(x))`

Space complexity: `O(1)`