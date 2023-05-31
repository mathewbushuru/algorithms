public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = { 2, 4, 6, 8, 10, 12, 14, 16 };
        int target = 10;

        int result = binarySearch(arr, target);

        if (result == -1) {
            System.out.println("Target element not found.");
        } else {
            System.out.println("Target element found at " + result + ".");
        }
    }

    public static int binarySearch(int[] array, int target) {
        int low = 0;
        int high = array.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}
