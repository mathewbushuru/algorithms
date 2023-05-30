# Comprehensive Algorithms and Data Structures.

This repository houses my solutions and detailed explanations to popular algorithms and data structures problems. The solutions are provided in `JavaScript` / `TypeScript`, `Python`, `C` and `Java` which are languages that I am more comfortable with. The repo is intended to be my online reference or notes as I learn these topics and I hope you found this information valuable. Feel free to fork/clone or let me know how I can improve it. 

*Each algorithm and data structure has its own separate directory containing its implemetation and problem solutions in the various languages*


```sh
├── README.md
├── Algorithms
├────  binary-search/
│       ├── JavaScript/
│       ├── .../
│       ├── Python
├────  sorting-algorithms/
│       ├── ...
├── Data Structures
├────  linked-lists/
│       ├── JavaScript/
│       ├── ...
```

## Table of Contents
- [Algorithms](#algorithms)
  - [Binary Search](#binary-search)
  - [Sorting algorithms](#sorting-algorithms)
    - [Insertion Sort](#insertion-sort)
- [Data Structures](#data-structures)
  - [Linked Lists](#linked-lists)

  ---

# Algorithms

## Sorting algorithms

### Insertion Sort

Insertion sort builds the final sorted array, one element at a time by shifting elements to the right until the correct position in the sorted portion of the array is found.

**Algorithm**

Initialization
- Assuming we have an unsorted array of numbers: `[9,3,5,1,7,2,8,4]`
- We take the first element and consider it as the sorted portion of the array. `[9]`

Iteration
- Iterate over the remaining elements in the array starting from the second element `i=1`
- In each iteration, compare the current element with the sorted portion of the array, moving elements to the right until we find the correct position to insert the current element `array[i]`

Insertion
- For our example, consider the first element outside the sorted portion, `array[i]=3`
- Compare `3` with the elements in the sorted portion `[9]`
- `3` is smaller than `9` so move `9` one position to the right resulting in `[3,9]` as the current sorted portion of the array

Repeat until the array is sorted
- continue for all the remaining unsorted elements, comparing and shifting as necessary
- Once we reach the end of the array, it will be fully sorted

*Time Complexity:* O(n^2)

---

## Data Structures

---
