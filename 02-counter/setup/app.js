//set initial count
let count = 0;

//select value and all buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const hasClasses = e.currentTarget.classList;

    if (hasClasses.contains("decrease")) {
      count--;
    } else if (hasClasses.contains("increase")) {
      count++;
    } else count = 0;

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else value.style.color = "black";

    value.textContent = count;
  });
});
