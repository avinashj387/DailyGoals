public class MergeSortLinkedList {

    // Node class should be static for nested class usage
    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static Node head;  // Head of the linked list

    // Method to find middle node
    public static Node getMid(Node head) {
        if (head == null) return null;
        
        Node slow = head;
        Node fast = head.next;  // Fast starts one ahead to get first mid in even-length lists

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // Method to merge two sorted lists
    public static Node merge(Node left, Node right) {
        Node merged = new Node(-1);  // Dummy node
        Node temp = merged;

        while (left != null && right != null) {
            if (left.data < right.data) {
                temp.next = left;
                left = left.next;
            } else {
                temp.next = right;
                right = right.next;
            }
            temp = temp.next;
        }

        // Attach remaining elements
        if (left != null) temp.next = left;
        if (right != null) temp.next = right;

        return merged.next;  // Skip dummy node
    }

    // Main merge sort method
    public static Node mergeSort(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        // Get middle node
        Node mid = getMid(head);
        Node rightHead = mid.next;
        mid.next = null;  // Split the list

        // Recursively sort both halves
        Node left = mergeSort(head);
        Node right = mergeSort(rightHead);

        // Merge sorted halves
        return merge(left, right);
    }

    // Utility method to print list
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // Create a linked list
        head = new Node(5);
        head.next = new Node(2);
        head.next.next = new Node(4);
        head.next.next.next = new Node(1);
        head.next.next.next.next = new Node(3);

        System.out.println("Original List:");
        printList(head);

        head = mergeSort(head);

        System.out.println("Sorted List:");
        printList(head);
    }
}
