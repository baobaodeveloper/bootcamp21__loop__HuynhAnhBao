const numEnter = document.getElementById("num-enter");
const result3 = document.getElementById("result3");
document.getElementById("calculate-num-n").addEventListener("click", () => {
  if (numEnter.value) {
    const numEnterValue = +numEnter.value;
    let sum = 1;
    for (let i = 2; i <= numEnterValue; i++) {
      sum += i;
    }
    result3.value = sum;
  }
});

document.getElementById("calculate-num-n").addEventListener("click", () => {
  result3.value = "";
});
