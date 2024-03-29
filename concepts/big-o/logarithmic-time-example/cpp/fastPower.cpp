// g++ fastPower.cpp -o fastPower -std=c++20 && ./fastPower

#include <iostream>

long long fastPower(long long base, long long exponent);

int main()
{
    // 1024
    std::cout << fastPower(2, 10) << std::endl;
}

long long fastPower(long long base, long long exponent)
{
    if (exponent == 0)
    {
        return 1;
    }

    long long halfPower = fastPower(base, exponent / 2);

    if (exponent % 2 == 0)
    {
        return halfPower * halfPower;
    }
    else
    {
        return base * halfPower * halfPower;
    }
}