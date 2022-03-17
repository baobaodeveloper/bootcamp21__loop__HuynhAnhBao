const numX = document.getElementById("number-x");
const numN = document.getElementById("number-n");
const result2 = document.getElementById("result2");
document.getElementById("calculate-sum").addEventListener("click", () => {
  if (numN.value && numX.value) {
    let numXValue = +numX.value;
    let numNValue = +numN.value;
    let sum = 0;
    for (let i = 1; i <= numNValue; i++) {
      sum += numXValue ** i;
    }

    result2.value = sum;
  }
});

document.getElementById("calculate-sum-again").addEventListener("click", () => {
  numX.value = "";
  numN.value = "";
  result2.value = "";
});
