// gcc binarySearch.c -o binarySearch && ./binarySearch

#include <stdio.h>

int binarySearch(int array[], int size, int target);

int main()
{
    int arr[] = {2, 4, 6, 8, 10, 12, 14, 16};
    int target = 10;
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = binarySearch(arr, size, target);

    if (result == -1)
    {
        printf("Target element not found");
    }
    else
    {
        printf("Target element found at %d. \n", result);
    }
}

int binarySearch(int array[], int size, int target)
{
    int low = 0;
    int high = size - 1;
    int mid;

    while (low <= high)
    {
        mid = (low + high) / 2;

        if (array[mid] == target)
        {
            return mid;
        }
        else if (array[mid] < target)
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