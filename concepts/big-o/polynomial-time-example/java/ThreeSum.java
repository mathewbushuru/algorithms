import java.util.Arrays;

public class ThreeSum {
    public static int[] threeSumZero(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; j < n; j++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        int[] result = { arr[i], arr[j], arr[k] };
                        return result;
                    }
                }
            }
        }

        return null;
    }

    public static int[] threeSumZeroBetter(int[] arr) {
        Arrays.sort(arr);

        for (int i = 0; i < arr.length - 2; i++) {
            if (i > 0 && arr[i] == arr[i-1]) {
                continue;
            }

            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];

                if (sum == 0) {
                    int[] result = {arr[i], arr[left], arr[right]};
                    return result;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return null;
    }

    public static void main(String[] args) {
        int[] sampleArr1 = { -1, 0, 1, 2, -1, -4 };
        // [-1, 0, 1]
        System.out.println(Arrays.toString(threeSumZero(sampleArr1)));

        int[] sampleArr2 = { -1, 0, 1, 2, -1, -4 };
        // [-1, -1, 2]
        System.out.println(Arrays.toString(threeSumZeroBetter(sampleArr2)));
    }
}
