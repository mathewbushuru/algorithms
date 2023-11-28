// g++-13 mergeSort.cpp -o mergeSort -std=c++20 && ./mergeSort

#include <iostream>
#include <vector>

std::vector<int> mergeSort(const std::vector<int> &vec);
std::vector<int> merge(const std::vector<int> &left, const std::vector<int> &right);

int main()
{
    std::vector<int> sampleVector{2, 4, 9, 6, 1, 8, 3, 5, 7};

    auto sortedVector = mergeSort(sampleVector);

    // 1 2 3 4 5 6 7 8 9
    for (int value : sortedVector)
    {
        std::cout << value << " ";
    }
    std::cout << std::endl;

    return 0;
}

std::vector<int> mergeSort(const std::vector<int> &vec)
{
    if (vec.size() < 2)
    {
        return vec;
    }

    int mid = vec.size() / 2;

    // call vector constructor with iterators from original vector
    std::vector<int> leftHalf(vec.begin(), vec.begin() + mid);
    std::vector<int> rightHalf(vec.begin() + mid, vec.end());

    std::vector<int> sortedLeft = mergeSort(leftHalf);
    std::vector<int> sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

std::vector<int> merge(const std::vector<int> &left, const std::vector<int> &right)
{
    std::vector<int> result;

    auto leftIt = left.begin();
    auto rightIt = right.begin();

    while (leftIt < left.end() && rightIt < right.end())
    {
        if (*leftIt < *rightIt)
        {
            result.push_back(*leftIt);
            ++leftIt;
        }
        else
        {
            result.push_back(*rightIt);
            ++rightIt;
        }
    }

    // result.insert(result.end(), leftIt, left.end());
    // result.insert(result.end(), rightIt, right.end());

    while (leftIt < left.end())
    {
        result.push_back(*leftIt);
        ++leftIt;
    }

    while (rightIt < right.end())
    {
        result.push_back(*rightIt);
        ++rightIt;
    }

    return result;
}