// gcc insertion_sort.c -o insertion_sort && ./insertion_sort

#include <stdio.h>

void insertionSort(int array[], int size);
void printArray(int array[], int size);

int main()
{
    int arr[] = {9, 3, 5, 1, 7, 2, 8, 4};
    int size = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, size);

    // 1 2 3 4 5 7 8 9
    printArray(arr, size);

    return 0;
}

void insertionSort(int array[], int size)
{
    int i, j;
    int currVal;

    for (i = 1; i < size; ++i)
    {
        currVal = array[i];

        j = i - 1;
        while (j >= 0 && array[j] > currVal)
        {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = currVal;
    }
}

void printArray(int array[], int size)
{
    int i;

    for (i = 0; i < size; ++i)
    {
        printf("%d ", array[i]);
    }
    printf("\n");
}