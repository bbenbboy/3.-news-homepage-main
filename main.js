"user strict";
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
});
