const numX = document.getElementById("number-x");
const numN = document.getElementById("number-n");
const result2 = document.getElementById(".");
document.getElementById("calculate-sum").addEventListener("click", () => {
  if (numN.value && numX.value) {
    let numXValue = +numX.value;
    let numNValue = +numN.value;
    let sum = 0;
    for (let i = 1; i <= numNValue; i++) {
      sum += numXValue ** i;
    }
  }
});
