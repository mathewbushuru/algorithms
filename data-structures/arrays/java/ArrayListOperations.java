// To perform dynamic array operations in java similar to JavaScript's, 
//we often use ArrayLists as shown below.
// Unlike java arrays, arraylists are automatically resizeable while still providing `O(1)` access.

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Arrays;

public class ArrayListOperations {
    public static void main(String[] args){
        // type-specific arraylist
        ArrayList<String> list = new ArrayList<String>();
        // diamond operator
        ArrayList<Integer> numbers = new ArrayList<>();

        // adding elements
        // append
        list.add("A");
        for(String val: list) {
            System.out.print(val + " ");
        }
        System.out.println();
        // insert at specific index - B A
        list.add(0, "B");
        for(String val: list) {
            System.out.print(val + " ");
        }
        System.out.println();

        // accessing elements
        String item = list.get(0);
        System.out.println(item);

        // updating items - C A
        list.set(0, "C");
        for(String val: list) {
            System.out.print(val + " ");
        }
        System.out.println(); 

        // removing elements
        // remove element at index
        list.remove(0);
        for(String val: list) {
            System.out.print(val + " ");
        }
        System.out.println(); 
        // remove by object - it's first occurrence
        list.remove("A");
        for(String val: list) {
            System.out.print(val + " ");
        }
        System.out.println(); 

        // checking existence
        boolean exists = list.contains("C");
        System.out.println(exists);

        // add some more elements
        list.add("D");
        list.add("E");
        list.add("F");

        // size of list
        int size = list.size();
        System.out.println(size);

        // check if list is empty
        boolean isEmpty = list.isEmpty();
        System.out.println(isEmpty);

        // iterating over arraylist 
        // using for-each loop  
        for(String value: list) {
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
        while(iterator.hasNext()){
            String val = iterator.next();
            System.out.print(val + " ");
        }
        System.out.println();

        // clearing arraylist
        list.clear();

        list.add("G");
        list.add("H");
        list.add("I");
        // convert to array 
        String[] array = list.toArray(new String[list.size()]);
        for(String val: array) {
            System.out.print(val + " ");
        }
        System.out.println();

        // initialization with values
        ArrayList<String> initializedList = new ArrayList<>(
            Arrays.asList("A", "B", "C")
        );
        for(String val: initializedList) {
            System.out.print(val + " ");
        }
        System.out.println();

        // index of first occurrence of, or -1 if unavailable
        int index = initializedList.indexOf("C");
        System.out.println(index);      // 2
        index = initializedList.indexOf("Z");
        System.out.println(index);      // -1
    }
}