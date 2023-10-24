let list = document.querySelectorAll("ul li a");
const li = document.querySelectorAll("ul li a");
const sections = document.querySelectorAll("section");

// This Function Allow Us To Switch The Color of Link Element Depend on The Section We Are In
function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll", activeMenu);

// Changing The Color Of Link Element When clicked
list.forEach((e) => {
  e.addEventListener("click", removeActive);
});

function removeActive() {
  list.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}

// Zooming When User Hover On Map Image
var zoomContainer = document.querySelector(".zoom-container");
var zoomImage = document.querySelector("#zoom-image");

zoomContainer.addEventListener("mousemove", function (e) {
  var containerWidth = zoomContainer.offsetWidth;
  var containerHeight = zoomContainer.offsetHeight;

  var mouseX = e.pageX - zoomContainer.offsetLeft;
  var mouseY = e.pageY - zoomContainer.offsetTop;

  var percentX = mouseX / containerWidth;
  var percentY = mouseY / containerHeight;

  var zoomedWidth = zoomImage.offsetWidth * 5;
  var zoomedHeight = zoomImage.offsetHeight * 5;

  var offsetX = (zoomedWidth - containerWidth) / 25;
  var offsetY = (zoomedHeight - containerHeight) / 25;

  var moveX = percentX * offsetX * -2;
  var moveY = percentY * offsetY * -2;

  zoomImage.style.transform =
    "scale(1.5) translate(" + moveX + "px, " + moveY + "px)";
});

zoomContainer.addEventListener("mouseleave", function () {
  zoomImage.style.transform = "scale(1) translate(0, 0)";
});
