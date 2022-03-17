document.getElementById("min-number").addEventListener("click", () => {
  let sum = 0;
  let n = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  document.getElementById("result1").value = n;
});
