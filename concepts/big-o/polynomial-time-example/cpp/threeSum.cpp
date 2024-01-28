// g++ threeSum.cpp -o threeSum -std=c++20 && ./threeSum

#include <iostream>
#include <vector>
#include <algorithm>
#include <stdexcept>

std::vector<int> threeSumZero(const std::vector<int>& vec);
std::vector<int> threeSumZeroBetter(std::vector<int> vec);

int main()
{
    std::vector<int> sampleVector1{ -1, 0, 1, 2, -1, -4 };
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

std::vector<int> threeSumZero(const std::vector<int>& vec)
{
    size_t n{ vec.size() };

    if (n < 3)
    {
        throw std::invalid_argument("Input vector must have at least three elements.");
    }

    std::vector<int> result{};
    size_t i, j, k;

    for (i = 0; i < n - 2; ++i)
    {
        for (j = i + 1; j < n - 1; ++j)
        {
            for (k = j + 1; k < n; ++k)
            {
                if (vec.at(i) + vec.at(j) + vec.at(k) == 0)
                {
                    result.insert(result.end(), { vec.at(i), vec.at(j), vec.at(k) });
                    return result;
                }
            }
        }
    }

    return result;
}

std::vector<int> threeSumZeroBetter(std::vector<int> vec)
{
    if (vec.size() < 3)
    {
        throw std::invalid_argument("Input vector must have at least three elements.");
    }

    // modifying vector - that's why i'm not passing it by  reference
    std::sort(vec.begin(), vec.end());

    std::vector<int> result{};
    size_t i, left, right;
    int sum;

    for (i = 0; i < vec.size() - 2; ++i)
    {
        if (i > 0 && vec[i] == vec[i - 1])
        {
            continue;
        }

        left = i + 1;
        right = vec.size() - 1;

        while (left < right)
        {
            sum = vec[i] + vec[left] + vec[right];

            if (sum == 0)
            {
                result.insert(result.end(), { vec[i], vec[left], vec[right] });
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
