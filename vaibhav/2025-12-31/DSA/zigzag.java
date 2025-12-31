public class zigzag {
  public static int[] Pzigzag(int matrix[][]) {  
    int m = matrix.length;
    int n = matrix[0].length;

    int col = 0;
    int row = 0;
    int idx = 0;
    int ans[] = new int[n * m];
    boolean up = true;

    while (row < m && col < n) { 
      ans[idx++] = matrix[row][col];
      
      if (up == true) {
        if (row == 0 || col == n - 1) {
          if (col == n - 1) {
            row++;
          } else {
            col++;
          }
          up = false;
        } else {
          row--;
          col++;
        }
      } else {
        if (col == 0 || row == m - 1) {
          if (row == m - 1) {
            col++;
          } else {
            row++;
          }
          up = true;
        } else {
          row++;
          col--;
        }
      }
    }
    return ans;
  }

  public static void main(String[] args) {
    int matrix[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
    int result[] = Pzigzag(matrix);
    
    System.out.println("Zigzag traversal:");
    for (int num : result) {
      System.out.print(num + " ");
    }
  }
}