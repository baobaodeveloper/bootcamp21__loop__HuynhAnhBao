const numDiv = document.getElementById("number-div");
const result4 = document.getElementById("result4");

document.getElementById("creat-div").addEventListener("click", () => {
  if (!numDiv.value) return;

  const numDivValue = +numDiv.value;
  const redDiv = `<div style="height: 50px; width: 200px; background-color: red ; margin: 10px 0"></div>`;
  const blueDiv = `<div style="height: 50px; width: 200px; background-color: blue;"></div>`;

  for (let i = 1; i <= numDivValue; i++) {
    if (i % 2 === 0) {
      result4.insertAdjacentHTML("afterbegin", redDiv);
    } else {
      result4.insertAdjacentHTML("afterbegin", blueDiv);
    }
  }
});

document.getElementById("creat-div-again").addEventListener("click", () => {
  result4.innerHTML = "";
  numDiv.value = "";
});
