const btnAdd = document.getElementById("addBtn");
const btnSub = document.getElementById("subBtn");
let val = 0;

btnAdd.addEventListener("click", function () {
  val += 1;
  if (val > 20) {
    document.getElementById("warning").innerHTML =
      "Value greater than 20 is not accepted";
    val = 20;
  }
  document.getElementById("showData").innerHTML = val;
});

btnSub.addEventListener("click", function () {
  val -= 1;
  if (val < 0) {
    document.getElementById("warning").innerHTML =
      "Negative value is not accepted";
    val = 0;
  }
  document.getElementById("showData").innerHTML = val;
});
