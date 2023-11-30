// g++ exponentialTimeExample.cpp -o exponentialTimeExample -std=c++20 && ./exponentialTimeExample

#include <iostream>
#include <vector>
#include <stdexcept>

int fibonacci(int n);
int fibonacciBetter(int n, std::vector<int> &memo);

int main()
{
    int n = 10;

    // vector constructor to initialize vector of size n+1 initially with -1s
    std::vector<int> memo(n + 1, -1);

    // 55
    std::cout << fibonacci(n) << std::endl;

    // 55
    std::cout << fibonacciBetter(n, memo) << std::endl;

    return 0;
}

int fibonacci(int n)
{
    if (n < 0)
    {
        throw std::invalid_argument("n should be greater than 0");
    }

    if (n == 0 || n == 1)
    {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

int fibonacciBetter(int n, std::vector<int> &memo)
{
    if (n < 0)
    {
        throw std::invalid_argument("n should be greater than 0");
    }

    if (memo[n] != -1)
    {
        return memo[n];
    }

    if (n == 0 || n == 1)
    {
        return n;
    }

    memo[n] = fibonacciBetter(n - 1, memo) + fibonacciBetter(n - 2, memo);
    return memo[n];
}