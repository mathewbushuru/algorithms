public class ArrayOperations {
    public static void main(String[] args){
        // array declaration
       int[] arr;
       // array of size 5 with default values (0 for int)
       arr =  new int[5];
       // array with values
       int[] arrWithValues = {1, 2, 3, 4, 5};
       
       // 0 0 0 0 0
       for (int val: arr) {
        System.out.print(val + " ");
       }
       System.out.println();

       // 1 2 3 4 5
       for (int val: arrWithValues){
        System.out.print(val + " ");
       }
       System.out.println();

       // accessing elements
       int lastElement = arrWithValues[4];
       System.out.println(lastElement);

       // Setting elements
       arrWithValues[0] = 100;
       // 100 2 3 4 5
       for (int val: arrWithValues){
        System.out.print(val + " ");
       }
       System.out.println();

       // array length
       int length = arrWithValues.length;
       // 5
       System.out.println(length);

       // iterating over elements 
       for (int i  = 0; i < arrWithValues.length; i++){
        System.out.print(arrWithValues[i] + " ");
       }
       System.out.println();

       // iterating over elements with enhanced for loop
       for (int value: arrWithValues){
        System.out.print(value + " ");
       }
       System.out.println();

       // ---
      // multi-dimensional arrays
      int [][] multiArray = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
      //6
      System.out.println(multiArray[1][2]);
    }
}