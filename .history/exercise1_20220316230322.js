document.getElementById("min-number").addEventListener("click", () => {
  let sum = 0;
  let n = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
});
