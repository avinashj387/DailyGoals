import java.util.*;
public class Kadanes{
  public static void KadanesAlgorithm(int arr[]){
    int cs = 0;                  //current sum
    int ms = Integer.MIN_VALUE;  // maximun sum 
    for(int i = 0; i < arr.length; i++){
      cs+= arr[i];
      if (cs < 0) {
        cs = 0;
      }
      ms = Math.max(ms, cs);  //compares ms and cs  
    }
    System.out.println("The maximum subarray sum is :" + ms);
  }
  public static void main(String[] args) {
    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    KadanesAlgorithm(arr);
  }
}
/*this is Kadanes algorithm of maxximum subarray sum usses two variables cs, ms and
takes only one loop that adds cs = arr[i] in cs and then compare with ms maxsum
and if cs < 0 it return 0; 
The time complexity of Kadane's Algorithm is O(n)
 */