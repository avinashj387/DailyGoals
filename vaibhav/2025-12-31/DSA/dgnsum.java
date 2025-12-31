public class dgnsum {
  public static void diagonalSum(int matrix[][]){
    int sum=0;
    for(int i = 0; i<matrix.length; i++){
      for(int j= 0; j< matrix[0].length; j++){
        if (i==j) {
          sum += matrix[i][j]; 
        }
        else if (i+j == matrix.length-1) {
          sum += matrix[i][j];
        }
      }
    }
    System.out.println("Diagonal sum :"+sum);
    // or 
    int sum2= 0;
    for (int i = 0; i < matrix.length; i++){
      sum2+= matrix[i][i];
      if (i != matrix.length-i-1)
        sum2+= matrix[i][matrix.length-i-1];
    }
    System.out.println(sum2);


  }
  public static void main(String[] args) {
    int matrix[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };

        diagonalSum(matrix);
  }
}
