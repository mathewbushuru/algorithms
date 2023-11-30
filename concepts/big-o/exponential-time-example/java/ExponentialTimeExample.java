import java.util.Arrays;

public class ExponentialTimeExample {
    public static void main(String[] args) {
        // 55
        System.out.println(fibonacci(10));

        // 55
        System.out.println(fibonacciBetter(10));
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // optimized version
    public static int fibonacciBetter(int n) {
        // n + 1 elements: 0 upto and including n
        int[] memo = new int[n + 1];

        Arrays.fill(memo, -1);

        return fibonacciMemo(n, memo);
    }

    private static int fibonacciMemo(int n, int[] memo) {
        if (memo[n] != -1) {
            return memo[n];
        }

        if (n <= 1) {
            return n;
        }

        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);

        return memo[n];
    }
}