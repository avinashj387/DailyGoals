public class majority {
  public static int MajorityElement(int arr[]){
    int repeat =0;
    int count = 1;
    for(int i = 0; i < arr.length; i++){
      if (count == 0) {
        repeat = arr[i];
        count= 1;
      }
      if (arr[i] == repeat) {
        count++;
      }else{
        count--;
      }
    }
    return repeat;
  }
  public static void main(String[] args) {
    int arr[] = {1,2,4,3,2,2,3,2,1,5};
    int result = MajorityElement(arr);
    System.out.println("Majority elements is " + result);
  }
}