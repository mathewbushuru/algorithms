public class ConstantTimeExample {
    public static void main(String[] args){
        int[] arr1 = {1, 2, 3, 4, 5};
        // 3
        System.out.println(getArrayElement(arr1, 2));
    }

    public static int getArrayElement(int[] arr, int index){
        return arr[index];
    }
}