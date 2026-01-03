public class SlidingWindow {
  public static void MaxxSum(int arr[], int k) {
    int curr = 0;
    for (int i = 0; i <= k; i++) {
      curr += arr[i];
    }
    int max = curr;
    for (int i = 1; i < arr.length - k; i++) {
      curr = curr - arr[i - 1] + arr[i + k - 1];
      if (curr > max) {
        max = curr;
      }
    }
    System.out.println("maximum subArray sum is :" + max);
  }
  public static void main(String[] args) {
    int arr[] = { 3, 8, 2, 5, 7, 6, 12 };
    int k = 3;
    MaxxSum(arr, k);
  }
}
/*this is sliding window problem gives the maxx subarray sum from the given
renage of index. this working is adding the next element and subtracting the 
previous one the logic is curr = curr - arr[i - 1] + arr[i + k - 1];
Time Complexity: O(n)
First loop: O(k) 
Second loop: O(n-k)


 */