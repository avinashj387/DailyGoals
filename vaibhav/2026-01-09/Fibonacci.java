public class Fibonacci {
  public static void FibonacciSeries(int N){
    int a = 0;
    int b = 1;
    System.out.print(a+ " " + b + " ");
    for(int i =3; i < N; i++){
      int next = a + b;
      System.out.print(next +" ");
      a = b;
      b = next;
    }
  }
    public static void main(String[] args) {
      int N =10;
      FibonacciSeries(N);
    }
}
