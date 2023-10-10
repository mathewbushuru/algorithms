function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 55
console.log(fibonacci(10));

function fibonacciBetter(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];

  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// 55
console.log(fibonacciBetter(10));

