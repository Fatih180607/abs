document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach((link) => {
    // Jika href dari link sama dengan currentPath, tambahkan kelas 'active'
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuToggle.querySelector(".hamburger").classList.toggle("active");
  });
});
