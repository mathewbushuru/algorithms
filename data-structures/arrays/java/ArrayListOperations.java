// To perform dynamic array operations in java we  use ArrayLists.
// Unlike java arrays, arraylists are automatically resizeable while still providing `O(1)` access.

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Arrays;

public class ArrayListOperations {
    public static void main(String[] args) {
        /*
         * Declaration
         */

        // type-specific arraylist
        ArrayList<String> list = new ArrayList<String>();
        printArrayList(list);   // [ ]

        // diamond operator
        ArrayList<Integer> numbers = new ArrayList<>();
        printArrayList(numbers);    // [ ]

        /*
         * Adding elements
         */

        // append
        list.add("A");
        printArrayList(list);   // [ A, ]

        // insert at specific index
        list.add(0, "B");
        printArrayList(list);   // [B, A, ]

        /*
         * Accessing elements
         */
        String item = list.get(0);
        System.out.println(item);   // B

        /*
         * Updating elements
         */
        list.set(0, "C");
        printArrayList(list);   // [C, A, ]

        /*
         * Removing elements
         */

        // remove element at index
        list.remove(0);
        printArrayList(list);   // [A, ]

        // remove by object - it's first occurrence
        list.remove("A");
        printArrayList(list);   // [ ]

        /*
         * Checking existence
         */
        boolean exists = list.contains("C");
        System.out.println(exists);     // false

        // add some more elements
        list.add("D");
        list.add("E");
        list.add("F");
        printArrayList(list);       // [D, E, F]

        /*
         * Size of list
         */
        int size = list.size();
        System.out.println(size);   // 3

        /*
         * Check if list is empty
         */
        boolean isEmpty = list.isEmpty();
        System.out.println(isEmpty);        // false

        /*
         * Iterating over arraylist
         */
        // using for-each loop
        for (String value : list) {
            System.out.print(value + " ");
        }
        System.out.println();

        // using for loop
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + " ");
        }
        System.out.println();

        // using iterator
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            String val = iterator.next();
            System.out.print(val + " ");
        }
        System.out.println();

        /*
         * Clearing arraylist
         */
        list.clear();
        printArrayList(list);       // [ ]

        // repopulate list
        list.add("G");
        list.add("H");
        list.add("I");

        /*
         * Convert ArrayList to array
         */
        String[] array = list.toArray(new String[list.size()]);
        System.out.println(Arrays.toString(array));             // [G, H, I]

        /*
         * Initialize ArrayList with values
         */
        ArrayList<String> initializedList = new ArrayList<>(
                Arrays.asList("A", "B", "C"));
        printArrayList(initializedList);                // [ A, B, C, ]

        /*
         * Search  ArrayList
         */
        // index of first occurrence of, or -1 if unavailable
        int index = initializedList.indexOf("C");
        System.out.println(index); // 2

        index = initializedList.indexOf("Z");
        System.out.println(index); // -1
    }

    // use unbounded generic ? to represent unknown type
    private static void printArrayList(ArrayList<?> list){
        System.out.print("[ ");
        for(Object item:list){
            System.out.print(item + ", ");
        }
        System.out.println("]");
    }
}