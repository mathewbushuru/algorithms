// Java strings are immutable hence any modification leads to a new string. 
// Java uses a String pool where literal strings are stored for memory optimization.

public class StringOperations {
    public static void main(String[] args){
        /**
         * declaration / initialization
         */
        // this uses the String pool
        String str1 = "hello";

        // this does not use the String pool
        String str2 = new String("hello");

        // concatenation
        String str3 = str1 + " " + str2;
        System.out.println(str3);               // "hello hello"

        /**
         * methods and operations
         */
        // length of string
        int len = str3.length();
        System.out.println(len);                // 11

        // charAt
        char firstLetter = str3.charAt(0);
        System.out.println(firstLetter);        // h

        // substring
        String sub = str3.substring(1, 3);
        System.out.println(sub);                // el

        // split - ["Hello", 'World']
        String[] partsArr = "Hello, World".split(", ");
        for (String part: partsArr){
            System.out.println(part);
        }
        
        // replace
        String replaced = str1.replace("e", "a");
        System.out.println(replaced);           // hallo

        // case conversion
        String upper = str1.toUpperCase();
        String lower = str1.toLowerCase();
        System.out.println(upper);              // HELLO
        System.out.println(lower);              // hello

        // trim whitespace
        String trimmed = "    hello     ".trim();
        System.out.println(trimmed);            // "hello"

        // starts / ends with
        boolean starts = str1.startsWith("he");
        System.out.println(starts);             // true
        boolean ends = str2.endsWith("lo");
        System.out.println(ends);               // true

        // indexOf / lastIndexof
        int pos = str1.indexOf('l');
        System.out.println(pos);                // 2
        int lastPos = str1.lastIndexOf('l');
        System.out.println(lastPos);            // 3

        /**
         * comparison
         */
        // compare content 
        boolean isEqual = str1.equals(str2);
        System.out.println(isEqual);            // true

        // compare case-insensitive content 
        boolean isEqualIgnoreCase = str1.equalsIgnoreCase("HELLO");
        System.out.println(isEqualIgnoreCase);  // true

        // lexicographical comparison - 0, 7, -17
        int comparison = str1.compareTo(str2);
        System.out.println(comparison);         // 0
        comparison = str1.compareTo("allo");
        System.out.println(comparison);         // 7
        comparison = str1.compareTo("yello");
        System.out.println(comparison);         // 17

        /**
         * StringBuilder(non-syncronized) & StringBuffer(syncronized)
         */
        // are more efficient and mutable 
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        System.out.println(sb);         // Hello
        sb.append(" ");
        sb.append("world");
        String result = sb.toString();
        System.out.println(result);     // Hello world

        /**
         * conversion
         */
        // string to char array 
        char[] chars = str1.toCharArray();
        System.out.print("[ ");
        for (char c:chars){
            System.out.print(c + ", ");
        }
        System.out.println(']');                // [ h, e, l, l, o, ]

        // string to integer 
        int number = Integer.parseInt("123");
        System.out.println(number);               // 123

        // integer to string 
        String numString = Integer.toString(123);
        System.out.println(numString);            // "123"
    }
}