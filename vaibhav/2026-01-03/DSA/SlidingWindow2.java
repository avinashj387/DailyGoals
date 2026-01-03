import java.util.*;
public class SlidingWindow2 {
    public static int MaxString(String str) {
        Set<Character> charSet = new HashSet<>();
        int Maxstr = 0;
        int j = 0;
        for (int i = 0; i < str.length(); i++) {
            while (charSet.contains(str.charAt(i))) {
                charSet.remove(str.charAt(j));
                j++;
            }
            charSet.add(str.charAt(i));
            Maxstr = Math.max(Maxstr, i - j + 1);
        }
        return Maxstr;
    }
    public static void main(String[] args) {
        String str = "abcabbcab"; 
        System.out.println(MaxString(str)); 
    }
}
/*in this code two pointers j (left) and i (right) along with a HashSet to track unique characters in string. As the right pointer i moves through the string character by character, this code checks if the current character already exists in the HashSet. If it doesn't exist, the character is added to the set and the hashset increses. If the character already present 
then left pointer j moves forward, removing characters from the set until the duplicate is eliminated.
Time Complexity: O(n)
 */