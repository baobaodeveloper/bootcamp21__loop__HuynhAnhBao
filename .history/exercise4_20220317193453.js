const numDiv = document.getElementById("number-div");
const result4 = document.getElementById("result4");

document.getElementById("creat-div").addEventListener("click", () => {
  if (!numDiv.value) return;

  const numDivValue = +numDiv.value;
  const redDiv = `<div style="height: 20px; width: 100px; background-color: red"></div>`;
  const blueDiv = `<div style="height: 20px; width: 100px; background-color: blue"></div>`;

  for (let i = 1; i <= numDivValue; i++) {
    if (i % 2 === 0) {
      result4.insertAdjacentHTML("afterbegin", redDiv);
    } else {
      result4.insertAdjacentHTML("afterbegin", blueDiv);
    }
  }
});
