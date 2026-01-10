public class Reversestring {
  public static void ReverseString(String str){
    int start = 0;
    int end = str.length() - 1;
    char arr[] = str.toCharArray();
    while (start < end ) {
      char temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    System.out.println(arr);
  }
  public static void Onotherway(String str){
    for(int i = str.length()-1; i>=0; i--){
      System.out.print(str.charAt(i));
    }
  }
  public static void main(String[] args) {
    String str = new String("hello world"); 
    ReverseString(str);
    Onotherway(str);
    
  }
}
