public class fibonacci {
  static int fib(int n){
    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }
   int fibo = fib(n- 1) + fib(n -2);
   return fibo;
  }
  public static void main(String[] args) {
    int n = 10;
    System.out.println(fib(n));
  }
}
