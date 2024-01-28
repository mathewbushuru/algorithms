// g++ binarySearch.cpp -o binarySearch -std=c++20 && ./binarySearch

#include <iostream>
#include <vector>

int binarySearchIterative(const std::vector<int>& vec, int target);
int binarySearchRecursive(const std::vector<int>& vec, int target);
int binarySearchRecursiveHelper(const std::vector<int>&, int target, int low, int high);

int main()
{
    std::vector<int> vec1{ 1, 2, 3, 4, 5, 6, 7, 8 };

    int result;

    // 5
    result = binarySearchIterative(vec1, 6);
    std::cout << "Iterative result: " << result << std::endl;

    // 5
    result = binarySearchRecursive(vec1, 6);
    std::cout << "Recursive result: " << result << std::endl;

    return 0;
}

int binarySearchIterative(const std::vector<int>& vec, int target)
{
    int low = 0;
    int high = vec.size() - 1;
    int mid;

    while (low <= high)
    {
        // use this instead of (low + high)/2 to avoid potential overflow
        mid = low + (high - low) / 2;

        if (vec[mid] == target)
        {
            return mid;
        }
        else if (vec[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    return -1;
}

int binarySearchRecursive(const std::vector<int>& vec, int target)
{
    return binarySearchRecursiveHelper(vec, target, 0, vec.size() - 1);
}

int binarySearchRecursiveHelper(const std::vector<int>& vec, int target, int low, int high)
{
    if (low > high)
    {
        return -1;
    }

    int mid = low + (high - low) / 2;

    if (vec[mid] == target)
    {
        return mid;
    }
    else if (vec[mid] < target)
    {
        return binarySearchRecursiveHelper(vec, target, mid + 1, high);
    }
    else
    {
        return binarySearchRecursiveHelper(vec, target, low, mid - 1);
    }
}
