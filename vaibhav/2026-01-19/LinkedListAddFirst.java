public class LinkedListAddFirst {
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
  //creating the method for adding the elements in the LL
  public void addfirst(int data) {
    //creating new node 
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
  public static void main(String[] args) {
    LinkedListAddFirst ll = new LinkedListAddFirst();
    ll.addfirst(1);
    ll.addfirst(2);
    ll.addfirst(3);
  }
}