public class Constructors {
  public static void main(String[] args) {
    Student s = new Student();
    Student s1 = new Student("sachin");
    Student s2 = new Student(5);
    s.name = "vaibhav";
    s.roll = 2;
    s1.roll = 4;
    s2.name = "sushant";
    System.out.println(s.name + s.roll);
    System.out.println(s1.name + s1.roll);
    System.out.println(s2.name + s2.roll);
  }
}

class Student {
  String name;
  int roll;

  Student() {
    System.out.println("constructor is called");
  }

  Student(String name) {
    this.name = name;
  }

  Student(int roll) {
    this.roll = roll;
  }
}