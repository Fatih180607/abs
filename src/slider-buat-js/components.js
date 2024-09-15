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

// hamburger button pada tampilan handphone
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuToggle.querySelector(".hamburger").classList.toggle("active");
  });
});

//navbar pada vocher.astro
// window.addEventListener("scroll", function () {
//   const arrow = document.querySelector(".arrow");
//   if (window.scrollY > 50) {
//     arrow.style.backgroundColor = "rgba(17, 17, 17, 0.75)";
//     arrow.style.boxShadow = "1px 1px 8px 2px #43306c";
//   } else {
//     arrow.style.backgroundColor = "rgba(17, 17, 17, 0)";
//     arrow.style.boxShadow = "none";
//   }
// });
