public class PrintLL {
  public static class node {
    int data;
    node next;

    public node(int data) {
      this.data = data;
      this.next = null;
    }

  }

  public static node Head;
  public static node Tail;

  // creating the method for adding the elements in the LL
  public void addfirst(int data) {
    // creating new node
    node newNode = new node(data);
    if (Head == null) {
      Head = Tail = newNode;
      return;
    }
    // newNode = head
    newNode.next = Head;
    // head = newNode
    Head = newNode;
  }

  public void print() {
    if (Head == null) {
      System.out.println("LL is empty");
      return;
    }
    node temp = Head;
    while (temp != null) {
      System.out.println(temp.data+" ");
      temp = temp.next;
    }
    System.out.println();
  }

  public static void main(String[] args) {
    PrintLL ll = new PrintLL();
    ll.addfirst(1);
    ll.print();
    ll.addfirst(2);
    ll.print();
    ll.addfirst(3);
    ll.print();
    ll.addfirst(4);
    ll.print();
    ll.addfirst(5);
    ll.print();
  }
}
