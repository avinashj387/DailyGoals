public class inheritance {
  public static void main(String[] args) {
    Fish shark = new Fish();
    Dog sonya = new Dog();
    System.out.println(shark.fins = 4);
    shark.eats();
    shark.breths();
    sonya.eats();
    sonya.breths();
    System.out.println(sonya.legs = 4);
  }
}

// base class or parent class
class Animal {
  String color;

  void eats() {
    System.out.println("Eats");
  }

  void breths() {
    System.out.println("breths");
  }
}

// derived class or child class
class Dog extends Animal {
  int legs;

  void bark() {
    System.out.println("barks");
  }
}
//derived class 
class Fish extends Animal {
  int fins;

  void swim() {
    System.out.println("swim in water ");
  }
}