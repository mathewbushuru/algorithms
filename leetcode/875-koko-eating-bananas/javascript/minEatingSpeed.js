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

const piles2 = [30, 11, 23, 4, 20];
let h2 = 5;
// 4
console.log(minEatingSpeed(piles2, h2));
