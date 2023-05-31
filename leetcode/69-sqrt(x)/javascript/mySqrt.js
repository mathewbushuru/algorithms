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
