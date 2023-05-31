def binary_search(array, target):
    low = 0
    high = len(array) - 1

    while low <= high:
        mid = (low + high) // 2

        if array[mid] == target:
            return mid
        elif array[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


arr = [2, 4, 6, 8, 10, 12, 14, 16]
target = 10

result = binary_search(arr, target)

if result == -1:
    print("Target not found")
else:
    print(f"Target found at index {result}")
