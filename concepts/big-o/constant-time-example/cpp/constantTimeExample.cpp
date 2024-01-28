// g++ constantTimeExample.cpp -o constantTimeExample -std=c++20 && ./constantTimeExample

#include <iostream>
#include <array>

template <size_t N>
int getArrayElement(const std::array<int, N>& arr, size_t index);

int main()
{
    std::array<int, 5> arr1 = { 1, 2, 3, 4, 5 };

    // 3
    std::cout << getArrayElement(arr1, 2) << std::endl;

    return 0;
}

template <size_t N>
int getArrayElement(const std::array<int, N>& arr, size_t index)
{
    return arr[index];
}