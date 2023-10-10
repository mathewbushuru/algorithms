public class LinearTimeExample {
    public static void main(String[] args){
        int[] sampleArray = {3, 1, 4, 5, 9, 2, 6, 5};
        // 9
        System.out.println(findMax(sampleArray));
    }

    public static int findMax(int[] arr){
        int maxVal = arr[0];

        for (int i = 1; i < arr.length; i++){
            if (arr[i] > maxVal){
                maxVal = arr[i];
            }
        }

        return maxVal;
    }
}