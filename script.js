const hamburger = document.getElementById("open");
const cross = document.getElementById("close");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  cross.classList.remove("hidden");
  menu.classList.remove("-translate-x-full");
  menu.classList.add("transition-all");
  menu.classList.add("duration-100");
  menu.classList.add("ease-in-out");
});

cross.addEventListener("click", () => {
  cross.classList.add("hidden");
  hamburger.classList.remove("hidden");
  menu.classList.add("-translate-x-full");
  menu.classList.remove("transition-all");
  menu.classList.remove("duration-100");
  menu.classList.remove("ease-in-out");
});
