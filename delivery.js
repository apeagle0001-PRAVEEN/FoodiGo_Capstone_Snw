
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("active");
  });
});


