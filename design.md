Take in the initial configuration
Most likely a matrix - 2D array of arrays
Calculate the next generation and return a matrix

Start by testing most basic functional input
(2x2 grid - but empty?)

| Input         | Output        |
| ------------- | ------------- |
| [[0,0],[0,0]] | [[0,0],[0,0]] |
| [[1,0],[0,0]] | [[0,0],[0,0]] |
| [[1,1],[0,0]] | [[0,0],[0,0]] |
| [[1,1],[1,0]] | [[1,1],[1,1]] |
| [[1,1],[1,1]] | [[1,1],[1,1]] |

Each cell could be mapped to the number of live cells that surround it

- leave original matrix untouched

Write a function that returns the co-ordinates of the surrounding cells

- return only the actual cells (so not ones off the edge of the board)
