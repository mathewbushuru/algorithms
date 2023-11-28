// g++ linearTimeExample.cpp -o linearTimeExample -std=c++20 && ./linearTimeExample

#include <iostream>
#include <vector>

int findMax(const std::vector<int> &vec)
{
    int maxVal{vec[0]};

    for (size_t i{0}; i < vec.size(); ++i)
    {
        if (vec[i] > maxVal)
        {
            maxVal = vec[i];
        }
    }

    return maxVal;
}

int main()
{
    std::vector<int> sampleVector{3, 1, 4, 5, 9, 2, 6, 5};

    // 9
    std::cout << findMax(sampleVector) << std::endl;

    return 0;
}