let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]

let result = 0
for (h = 0; h < tab.length; h++) {
  for (i = 0; i < tab[h].length; i++) {
    for (j = 0; j < tab[h][i].length; j++) {
      result += tab[h][i][j]
    }
    j = 0
  }
  i = 0
}
console.log(result)