public class SlidingWindow3 {
  public static int FindSubArray(int arr[], int k){
    int count = 0;
    int sum = 0;
    int end = 0;
    for(int start = 0; start < arr.length; start++){
      sum+= arr[start];
      while (sum > k && end <= start) {
        sum-= arr[end];
        end++;
      }
      if (sum == k) {
        count++;
      }
    }
    return count;
  }
  public static void main(String[] args) {
    int arr[] = {1,2,4,3,6,2,5};
    int k= 9;
    System.out.println("no of subArray with sum "+ k +" is : "+ FindSubArray(arr, k));
  }
}
