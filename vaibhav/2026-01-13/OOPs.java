public class OOPs {
  public static void main(String args[]){
    Pen p1 = new Pen();
    p1.setColor("red");
    p1.setTip(1);
    p1.color = "yellow";
    p1.tip = 2;
    System.out.println(p1.color);
    System.out.println(p1.tip);
    Student sachin = new Student();
    sachin.age = 22;
    sachin.persentage = 87;
    System.out.println(sachin.name);
    System.out.println(sachin.age);
    System.out.println(sachin.persentage);
  }
}

class Pen {
  String color;
  int tip;

  void setColor(String newColor) {
    color = newColor;
  }
  void setTip(int newTip) {
    tip = newTip;
  }
}


class Student {
  String name;
  int age;
  float persentage;

  void calpercentage(int phy, int che, int math){
    persentage = (phy + che + math) /3;
  }
}