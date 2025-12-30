#Print all elements of a matrix (row-wise)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for val in row:
        print(val, end=" ")
print("\n")

#Print matrix column-wise
for c in range(len(matrix[0])):
    for r in range(len(matrix)):
        print(matrix[r][c], end=" ")
print("\n")


#Find sum of each row
for row in matrix:
    print(sum(row))


