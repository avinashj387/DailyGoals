import java.util.*;
public class longestsubarray{
  public static int longestSubArray(int arr[], int k){
    int right = 0; int left = 0;
    int curr = 0; int maxLength = 0;
    for(right = 0; right < arr.length; right++){
      curr+= arr[right];
      while (curr > k && left <= right) {
        curr -=arr[left];
        left++;
      }
      if (curr == k) {
        int length = right - left+1;
        maxLength = Math.max(maxLength, length);
      } 
    }
    return maxLength;
  }
  public static void main(String[] args) {
    int arr[]= {1,4,3,7,4,7,3,3};
    int k=8;
    int ans = longestSubArray(arr, k);
    System.out.println("longest subarray with sum "+ k +" is: "+ ans);
  }
}
/*this problem is solved by sliding window approach we are taken four variables are right left curr and maxlength left represents 
the starting index of array while right represents the end of an array and curr is the sum of array from left to right here while 
loop is taken to shrink the window if curr gets grether than k means tharget value and upto last element of array here thid logic
is used (curr -=arr[left]; left++;) here i substract the left when curr becomes grether than k at that moment this logic forwards
left++ and start to find new subarray with target and in the for loop i aplied the if conditon that conditon is if (curr == k)
then in the lenght variable we stored the subaray length using (length  = right - left +1) and that value compare with previous
maxlenght using Math  and at last return the maxlenght.
Time complexity is O(n)
 */