**Leetcode 875 (Medium) - [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)**

> Koko loves to eat bananas. There are `n` piles of bananas, the `i-th` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

> Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

> Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

> Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

> Input: `piles = [3,6,7,11]`, `h = 8`
> Output: `4`

> Input: `piles = [30,11,23,4,20]`, `h = 5`
> Output: `30`

> Input: `piles = [30,11,23,4,20]`, `h = 6`
> Output: `23`

Algorithm: Use binary search to find the minimum possible `k` within the search space. We know that the minimum value of `k` is `1` and the maximum is `max(piles)`, so we search for it in this range.

Solution

`JavaScript`

```js
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }

    if (hours <= h) {
      // Koko can eat slower
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const piles1 = [3, 6, 7, 11];
let h1 = 8;
// 4
console.log(minEatingSpeed(piles1, h1));
```

Time complexity: `O(nlog(n))` where n is max pile size.