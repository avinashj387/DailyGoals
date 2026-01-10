public class PrimeNumber {

  public static void main(String[] args) {
    int n = 3;

    boolean isPrime = true;
    if( n <= 1){
      isPrime = false;
    }else{
      for(int i = 2; i < n ; i++){
        if (n % i == 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      System.out.println("Given No is Prime Number");
    }else{
      System.out.println("Given No is No Prime Number");
    }
  }
}