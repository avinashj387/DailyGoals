public class FirstNonRepeat {
  public static void main(String[] args) {
    String s = "hello i am vaibhav";

        int[] count = new int[256];
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            count[c]++;
        }
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (count[c] == 1) {
                System.out.println("First non-repeating: " + c);
                return;
            }
        }
        System.out.println("No non-repeating character");
  }
}
