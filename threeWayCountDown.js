for (i = 101; i > 0; i = i - 2) {
  console.log(i)
}

var j = 101
while (j > 0) {
  console.log(j)
  j = j - 2
}

for (let k = 101; k > 0; --k) {
  if (k % 2 !== 0) {
    console.log(k)
  }
}