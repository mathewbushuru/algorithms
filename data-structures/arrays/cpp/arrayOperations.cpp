// g++ arrayOperations.cpp -o arrayOperations -std=c++20 && ./arrayOperations

// C++ arrays store fixed size sequential elements of the same type
// When you pass arrays to functions you have to include the size since it is not known to the called function
// C++ does not perform automatic bounds checking on arrays.

#include <iostream>

void printArray(int array[], int size);

int main()
{
    /*
     * Declaration
     */
     // has garbage values until initialization
    int arr1[10];

    /*
     * Declaration with initialization
     */
     // Initialize the array explicitly
    int arr2[5] = { 1, 2, 3, 4, 5 };
    printArray(arr2, 5);        // [1, 2, 3, 4, 5, ]

    // infer array size
    int arr3[] = { 6, 7, 8, 9 };
    printArray(arr3, 4);        // [6, 7, 8, 9, ]

    /*
     * Accessing elements
     */
    int value = arr2[1];        // 2

    /*
     * Modifying elements
     */
    arr2[1] = 20;
    printArray(arr2, 5);        // [1, 20, 3, 4, 5, ]

    /*
     * Array size
     */
    int size = sizeof(arr2) / sizeof(arr2[0]);          // 5

    /*
     * Iterating over arrays
     */
    for (int i = 0; i < size; ++i)
    {
        std::cout << arr2[i] << " ";
    }
    std::cout << std::endl;

    /*
     * Multidimensional arrays
     */
    int multiArray[2][3] = { {1, 2, 3}, {4, 5, 6} };

    return 0;
}

void printArray(int array[], int size)
{
    std::cout << "[";
    for (int i = 0; i < size; ++i)
    {
        std::cout << array[i] << ", ";
    }
    std::cout << "]" << std::endl;
}