public class FastPowerExample {
    public static void main(String[] args) {
        // 1024
        System.out.println(fastPower(2, 10));
    }

    public static long fastPower(long base, int exponent){
        if (exponent == 0) return 1; 

        long halfPower = fastPower(base, exponent / 2); 

        if (exponent % 2 == 0){
            return halfPower * halfPower;
        } else {
            return base * halfPower * halfPower;
        }
    }
}