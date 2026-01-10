import java.util.Scanner;

public class Palindrome {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the String: ");
    String s = sc.next();
    int left = 0;
    int right = s.length() - 1;
    boolean isPalindrome = true;
    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) {
        isPalindrome = false;
        break;
      }
      left++;
      right--;
    }

    if (isPalindrome == true) {
      System.out.println("Given string is Palindrome");
    }else {
      System.out.println("given string is not palindrome");
    }
    
  }
}
