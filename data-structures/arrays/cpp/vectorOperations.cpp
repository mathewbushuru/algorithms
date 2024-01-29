// g++ vectorOperations.cpp -o vectorOperations -std=c++20 && ./vectorOperations

// Are dynamic arrays provided by the Standard Template Library  that can resize themselves automatically.

#include <iostream>
#include <vector>

void printVector(const std::vector<int>& vec);

int main()
{
    /*
     * Declaration and initialization
     */
     // declare empty vector
    std::vector<int> vec1;
    printVector(vec1);              // []

    // initialize with initializer list
    std::vector<int> vec2 = { 1, 2, 3, 4, 5 };
    printVector(vec2);              // [1, 2, 3, 4, 5, ]

    // avoid narrowing conversions during initialization
    std::vector<int> vec3{ 6, 7, 8 };
    printVector(vec3);              // [6, 7, 8, ]

    // This will throw an error. Without using above syntac, only warnings will be generated.
    // std::vector<int> vec4 {9.1, 8.2, 10.3};

    /*
     * Accessing elements
     */
     // direct access - no bounds checking
    int firstElement = vec2[0];                 // 1

    // bounds checking
    int lastElement = vec2.at(4);            // 5
    std::cout << lastElement << std::endl;

    /*
     * Modifying elements
     */
     // add to the end
    vec2.push_back(6);
    printVector(vec2);               // [1, 2, 3, 4, 5, 6, ]

    // remove last element
    vec2.pop_back();
    printVector(vec2);              // [1, 2, 3, 4, 5, ]

    // remove element at specific index e.g third element
    // provide iterator of start of element to erase
    vec2.erase(vec2.begin() + 2);
    printVector(vec2);                          // [1, 2, 4, 5, ]

    // add element to specific position
    // insert element at beginning
    vec2.insert(vec2.begin(), 0);
    printVector(vec2);                              // [0, 1, 2, 4, 5, ]

    // insert element at third index
    vec2.insert(vec2.begin() + 3, 3);
    printVector(vec2);                              // [0, 1, 2, 3, 4, 5, ]

    /*
     * Iterating over vectors
     */
     // using iterator
    for (auto it = vec2.begin(); it != vec2.end(); ++it)
    {
        std::cout << *it << " ";
    }
    std::cout << std::endl;                 // 0 1 2 3 4 5

    // using range based for loop
    for (int num : vec2)
    {
        std::cout << num << " ";
    }
    std::cout << std::endl;                 // 0 1 2 3 4 5

    /*
     * Size and capacity
     * (Vectors manage their own memory)
     */
    // size - number of elements
    size_t size = vec2.size();              // 6

    // capacity - currently allocated space
    size_t capacity = vec2.capacity();      // 10 using g++ though might vary by compiler

    /*
     * Resizing and reserving
     */
    // Resizing changes the size of the vector
    vec2.resize(10);
    std::cout << vec2.size() << std::endl;      // 10
    printVector(vec2);                          // [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, ]
    std::cout << vec2.capacity() << std::endl;      // 10

    // Reserving changes the capacity of the vector
    vec2.reserve(20);
    std::cout << vec2.capacity() << std::endl;      // 20

    return 0;
}

void printVector(const std::vector<int>& vec)
{
    std::cout << "[";
    for (int num : vec)
    {
        std::cout << num << ", ";
    }
    std::cout << "]" << std::endl;
}