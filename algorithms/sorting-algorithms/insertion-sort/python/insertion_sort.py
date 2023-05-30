def insertion_sort(list):
    for i in range(1, len(list)):
        currVal = arr[i]
        j = i - 1
        while j >= 0 and list[j] > currVal:
            list[j + 1] = list[j]
            j -= 1
        list[j + 1] = currVal
    return list


arr = [9, 3, 5, 1, 7, 2, 8, 4]
sorted_arr = insertion_sort((arr))

# [1, 2, 3, 4, 5, 7, 8, 9]
print(sorted_arr)
