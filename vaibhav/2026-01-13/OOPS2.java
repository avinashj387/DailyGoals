public class OOPS2 {
  public static void main(String[] args) {
    BankAccount mybank = new BankAccount();
    mybank.username = "vaibhavnawale";
    // mybank.password = "abcd";   cannot access here becuase privet access modifier
    mybank.setpwd("abcdef");
    System.out.println(mybank.username);
    System.out.println(mybank);
  }
}

class BankAccount {
public  String username;
private  String password;

void setpwd(String pwd){
  password = pwd;
}
}
