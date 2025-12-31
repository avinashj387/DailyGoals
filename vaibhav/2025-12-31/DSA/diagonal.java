public class diagonal {

  public static void Diagonal(int matrix[][]) {
    System.out.print("Primary Diagonal: ");
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix.length; j++) {
        if (i == j) {
          System.out.print(matrix[i][j]+" ");
        }
      }
    }
    System.out.println();
    System.out.print("Secondary Diagonal: ");
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix.length; j++) {
        if (i + j == matrix.length - 1) {
          System.out.print(matrix[i][j]+" ");
        }
      }
    }
  }

  public static void main(String[] args) {
    int matrix[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };

    Diagonal(matrix);
  }
}
