const list = document.querySelector(".list");
const hamburger = document.querySelector(".hamburger");

let showMenu = false;

hamburger.addEventListener("click", menuToggle);

function menuToggle() {
  if (!showMenu) {
    list.classList.add("open");
    showMenu = true;
  } else {
    list.classList.remove("open");
    showMenu = false;
  }
}
