function fastPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  const halfPower = fastPower(base, Math.floor(exponent / 2));

  if (exponent % 2 === 0) {
    return halfPower * halfPower;
  } else {
    return base * halfPower * halfPower;
  }
}

// 1024
console.log(fastPower(2, 10));
