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
        System.out.println(str3);

        /**
         * methods and operations
         */
        // length of string
        int len = str3.length();
        System.out.println(len);
        // charAt
        char firstLetter = str3.charAt(0);
        System.out.println(firstLetter);
        // substring - 'el'
        String sub = str3.substring(1, 3);
        System.out.println(sub);
        // split - ["Hello", 'World']
        String[] partsArr = "Hello, World".split(", ");
        for (String part: partsArr){
            System.out.println(part);
        }
        // replace - "hallo"
        String replaced = str1.replace("e", "a");
        System.out.println(replaced);
        // case conversion
        String upper = str1.toUpperCase();
        String lower = str1.toLowerCase();
        System.out.println(upper);
        System.out.println(lower);
        // trim whitespace
        String trimmed = "    hello     ".trim();
        System.out.println(trimmed);
        // starts / ends with
        boolean starts = str1.startsWith("he");
        System.out.println(starts);
        boolean ends = str2.endsWith("lo");
        System.out.println(ends);
        // indexOf / lastIndexof - 2, 3
        int pos = str1.indexOf('l');
        System.out.println(pos);
        int lastPos = str1.lastIndexOf('l');
        System.out.println(lastPos);

        /**
         * comparison
         */
        // compare content 
        boolean isEqual = str1.equals(str2);
        System.out.println(isEqual);
        // compare case-insensitive content 
        boolean isEqualIgnoreCase = str1.equalsIgnoreCase("HELLO");
        System.out.println(isEqualIgnoreCase);
        // lexicographical comparison - 0, 7, -17
        int comparison = str1.compareTo(str2);
        System.out.println(comparison);
        comparison = str1.compareTo("allo");
        System.out.println(comparison);
        comparison = str1.compareTo("yello");
        System.out.println(comparison);

        /**
         * StringBuilder(non-syncronized) & StringBuffer(syncronized)
         */
        // are more efficient and mutable 
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        System.out.println(sb);
        sb.append(" ");
        sb.append("world");
        String result = sb.toString();
        System.out.println(result);

        /**
         * conversion
         */
        // string to char array 
        char[] chars = str1.toCharArray();
        // string to integer 
        int number = Integer.parseInt("123");
        System.out.println(number);
        // integer to string 
        String numString = Integer.toString(123);
        System.out.println(numString);
    }
}