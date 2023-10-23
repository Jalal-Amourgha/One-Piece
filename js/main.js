let list = document.querySelectorAll("ul li a");
const li = document.querySelectorAll("ul li a");
const sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll", activeMenu);

list.forEach((e) => {
  e.addEventListener("click", removeActive);
});

function removeActive() {
  list.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}
