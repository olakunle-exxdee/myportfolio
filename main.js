const list = document.querySelector(".list");
const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");

let showMenu = false;

window.addEventListener("scroll", () => {
  const scrollHeight = window.window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

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
