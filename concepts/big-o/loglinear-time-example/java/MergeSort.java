import java.util.List;
import java.util.ArrayList;

public class MergeSort {
    public static List<Integer> mergeSort(List<Integer> list) {
        // base case - already sorted
        if (list.size() < 2) {
            return list;
        }

        // otherwise divide list into two halves
        List<Integer> leftList = new ArrayList<>(list.subList(0, list.size() / 2));
        List<Integer> rightList = new ArrayList<>(list.subList(list.size() / 2, list.size()));

        // sort each half
        List<Integer> sortedLeft = mergeSort(leftList);
        List<Integer> sortedRight = mergeSort(rightList);

        // merge sorted halves
        return merge(sortedLeft, sortedRight);
    }

    private static List<Integer> merge(List<Integer> left, List<Integer> right) {
        List<Integer> merged = new ArrayList<>();

        int leftIndex = 0;
        int rightIndex = 0;

        // merge the two arrays while they each have elements
        while (leftIndex < left.size() && rightIndex < right.size()) {
            if (left.get(leftIndex) < right.get(rightIndex)) {
                merged.add(left.get(leftIndex));
                leftIndex += 1;
            } else {
                merged.add(right.get(rightIndex));
                rightIndex += 1;
            }
        }

        // append any remaining elements
        while (leftIndex < left.size()){
            merged.add(left.get(leftIndex));
            leftIndex += 1;
        }

        while (rightIndex < right.size()){
            merged.add(right.get(rightIndex));
            rightIndex += 1;
        }

        return merged;
    }

    public static void main(String[] args) {
        List<Integer> arr = List.of(2, 4, 9, 6, 1, 8, 3, 5, 7);
        List<Integer> sortedArr = mergeSort(arr);
        // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        System.out.println(sortedArr);
    }
}