const numDiv = document.getElementById("number-div");
const result4 = document.getElementById("result4");

document.getElementById("creat-div").addEventListener("click", () => {
  if (!numDiv.value) return;

  const numDivValue = +numDiv.value;

  for (let i = 1; i <= numDivValue; i++) {
    if (i % 2 === 0) {
      result4.innerHTML = `   <div style="height: 20px; width: 100px; background-color: red"></div>`;
    }
  }
});
