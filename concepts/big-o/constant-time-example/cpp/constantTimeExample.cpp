// g++ constantTimeExample.cpp -o constantTimeExample && ./constantTimeExample

#include <iostream>
#include <array>

template <size_t N>
int getArrayElement(const std::array<int, N> &arr, size_t index)
{
    return arr[index];
}

int main()
{
    std::array<int, 5> arr1 = {1, 2, 3, 4, 5};

    // 3
    std::cout << getArrayElement(arr1, 2) << std::endl;

    return 0;
}