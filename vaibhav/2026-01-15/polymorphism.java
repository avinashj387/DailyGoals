public class polymorphism {
  public static void main(String[] args) {
    //method overloading (compile time)
    Calcutator calc = new Calcutator();
    System.out.println(calc.sum(3, 3));
    System.out.println(calc.sum((float)3.8,( float)3.9));
    System.out.println(calc.sum(3, 3,3));

    // method overrinding (run time polymorphism)
    //here we called the child method 
    deer d = new deer();
    d.eats();   // here it will print the deer class functin output 
    // here we called the parent method 
    Animal a = new Animal();
    a.eats();   // here it will print the animal class function output 
  }
}
// there are two types of polymorphism 
// 1. Method overloading on compile time 
class Calcutator {
  int sum(int a, int b) {
    return a + b;
  }

  float sum(float a, float b) {
    return a + b;
  }

  int sum(int a,int b, int c) {
    return a + b + c;
  }
}

//2. Method overriding (run time polymorphism)

class Animal {
  void eats() {
    System.out.println("eats everything");
  }
}

class deer extends Animal {
  void eats() {
    System.out.println("eats grass");
  }
}
