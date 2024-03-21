// g++ stringOperations.cpp -o stringOperations -std=c++20 && ./stringOperations

#include <iostream>
#include <string>
#include <stdexcept>

int main()
{
    /*
     * Creating strings
     */
     // Empty string
    std::string str1;

    // Initialized with a C-string
    std::string str2 = "Hello";

    // Initialized with a C-string using the constructor
    std::string str3("World");

    // Initialized using copy constructor
    std::string str4 = str2;

    // initialization using copy constructor and C++11 uniform initialization
    std::string str5{ str3 };

    // initialize string of 5 'a' characters using the constructor- "aaaaa"
    std::string str6(5, 'a');

    /*
     * Length and capacity
     */
    size_t length = str2.length();            // 5
    size_t capacity = str2.capacity();      // 22 

    /*
     * Accessing characters
     */
     // direct access
    char firstChar = str2[0];                   // 'H'
    char lastChar = str2[str2.length() - 1];    // 'o'

    // using .at() for bounds checking
    // throws std::out_of_range if index out of bounds
    try
    {
        char ch = str2.at(150);
    }
    catch (std::out_of_range& e)
    {
        std::cout << "Out of range exception: " << e.what() << std::endl;       // Out of range exception: basic_string
    }

    /*
     * Concatenation
     */
    std::string str7 = str2 + " " + str3;          // "Hello World"
    str1 += "Matt";
    str1 += " B";                               // "Matt B"

    /*
     * Substrings
     */
     // Starting at position 6, extract 5 characters
    std::string sub = str7.substr(6, 5);            // "World"

    /*
     * Comparison
     */
    std::string a = "apple";
    std::string b = "orange";
    if (a == b)
    {
        std::cout << "a is equal to b" << std::endl;
    }
    else if (a < b)
    {
        std::cout << "a is lexicographically less than b" << std::endl;            // This prints
    }
    else
    {
        std::cout << "a is lexicographically greater than b" << std::endl;
    }

    /*
    * Searching and finding substrings
    */
    // Find index of 'B' in "Matt B"
    size_t pos = str1.find("B");            // 5

    // searching non existent substring
    pos = str1.find("Batt");            // garbage number

    // to be sure you found substring, compare to npos
    if (pos != std::string::npos)
    {
        std::cout << "Found substring at " << pos << std::endl;
    }
    else
    {
        std::cout << "Substring not found" << std::endl;
    }

    /*
    * Modifying strings
    */
    std::string str8 = "Hello world";

    // replace World with Universe
    str8.replace(6, 5, "universe");         // Hello universe

    // erase
    str8.erase(6, 3);                           // Hello verse

    // insert 
    str8.insert(6, "multi");                    // Hello multiverse

    /*
    * Convert C++ string to C String
    */
    const char* cString = str8.c_str();                  // Hello multiverse

    /*
     * Iterate over String
     */
     // using range based loop
    for (char c : str1)
    {
        std::cout << c;
    }
    std::cout << std::endl;                             // Matt B

    // using iterator - using auto type is easier
    for (std::string::iterator it = str8.begin(); it != str8.end(); ++it)
    {
        std::cout << *it << ' ';
    }
    std::cout << std::endl;                             //H e l l o   m u l t i v e r s e 

    return 0;
}