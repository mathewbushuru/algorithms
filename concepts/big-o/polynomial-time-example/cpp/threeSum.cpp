// g++ threeSum.cpp -o threeSum -std=c++20 && ./threeSum

#include <iostream>
#include <vector>
#include <algorithm>

std::vector<int> threeSumZero(const std::vector<int> &vec)
{
    size_t n{vec.size()};

    std::vector<int> result{};

    for (size_t i{0}; i < n - 2; ++i)
    {
        for (size_t j{i + 1}; j < n - 1; ++j)
        {
            for (size_t k{j + 1}; k < n; ++k)
            {
                if (vec.at(i) + vec.at(j) + vec.at(k) == 0)
                {
                    result.insert(result.end(), {vec.at(i), vec.at(j), vec.at(k)});
                    return result;
                }
            }
        }
    }

    return result;
}

std::vector<int> threeSumZeroBetter(std::vector<int> vec)
{
    // modifying vector - that's why i'm not passing it by  reference
    std::sort(vec.begin(), vec.end());

    std::vector<int> result{};

    for (size_t i{0}; i < vec.size() - 2; ++i)
    {
        if (i > 0 && vec[i] == vec[i - 1])
        {
            continue;
        }

        size_t left{i + 1};
        size_t right{vec.size() - 1};

        while (left < right)
        {
            int sum{vec[i] + vec[left] + vec[right]};

            if (sum == 0)
            {
                result.insert(result.end(), {vec[i], vec[left], vec[right]});
                return result;
            }
            else if (sum < 0)
            {
                ++left;
            }
            else
            {
                --right;
            }
        }
    }

    return result;
}

int main()
{
    std::vector<int> sampleVector1{-1, 0, 1, 2, -1, -4};
    std::vector<int> result1 = threeSumZero(sampleVector1);

    if (result1.empty())
    {
        std::cout << "No triplet found" << std::endl;
    }
    else
    {
        // -1, 0, 1
        std::cout << result1[0] << ", " << result1[1] << ", " << result1[2] << std::endl;
    }

    // using copy constructor
    std::vector<int> sampleVector2(sampleVector1);
    std::vector<int> result2 = threeSumZeroBetter(sampleVector2);

    if (result2.empty())
    {
        std::cout << "No triplet found" << std::endl;
    }
    else
    {
        // -1, -1, 2
        std::cout << result2[0] << ", " << result2[1] << ", " << result2[2] << std::endl;
    }

    return 0;
}