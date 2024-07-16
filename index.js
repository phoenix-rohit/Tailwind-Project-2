"use strict";

const hamBtn = document.getElementById("ham");
const closBtn = document.getElementById("close");
const menu = document.getElementById("menu");

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("close");
  closBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

closBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("close");
  closBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
