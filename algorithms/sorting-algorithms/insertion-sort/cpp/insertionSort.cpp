// g++ insertionSort.cpp -o insertionSort -std=c++20 && ./insertionSort

#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& vec);

int main()
{
    std::vector<int> vec1{ 9,3,5,1,7,2,8,4 };

    insertionSort(vec1);

    // [ 1 2 3 4 5 7 8 9 ]
    std::cout << "[ ";
    for (int val : vec1)
    {
        std::cout << val << " ";
    }
    std::cout << "]" << std::endl;

    return 0;
}

void insertionSort(std::vector<int>& vec)
{
    int i, j;
    int currVal;

    for (i = 1; i < vec.size(); ++i)
    {
        currVal = vec[i];
        j = i - 1;

        while (j >= 0 && vec[j] > currVal)
        {
            vec[j + 1] = vec[j];
            --j;
        }

        vec[j + 1] = currVal;
    }
}