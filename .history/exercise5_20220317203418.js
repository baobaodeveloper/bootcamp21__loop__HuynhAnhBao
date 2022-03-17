const numPrime = document.getElementById("number-prime");
const result5 = document.getElementById("result5");

document.getElementById("calculate-prime").addEventListener("click", () => {
  const numPrimeValue = +numPrime.value;
  if (!numPrimeValue || numPrimeValue < 0) return;

  let all = "";
  for (let i = 2; i <= numPrimeValue; i++) {
    if (i === 2) all += 2;
    if (i === 3) all += 3;
    if (i % 2 !== 0) {
      let check = true;
      for (let j = 3; j < i; j += 2) {
        if (i % j === 0) {
          check = false;
          break;
        }
      }
      if (check) all += i;
    }
  }
});
