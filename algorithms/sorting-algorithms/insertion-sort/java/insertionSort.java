public class insertionSort {
    public static void main(String[] args) {
        int[] arr = { 9, 3, 5, 1, 7, 2, 8, 4 };
        sort(arr);
        // 1 2 3 4 5 6 7 8 9
        printArray(arr);
    }

    public static void sort(int[] array) {
        for (int i = 1; i < array.length; i++) {
            int currVal = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > currVal) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = currVal;
        }
    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}