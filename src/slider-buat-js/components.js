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

// Ambil elemen dropdown dan menu list
const dropdownItems = document.querySelectorAll(".dropdown-content a");
const menuItems = document.querySelectorAll(".menu");

// Event listener untuk setiap filter di dropdown
dropdownItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    // Ambil kategori dari atribut data-filter
    const filterCategory = item.getAttribute("data-filter");

    // Tampilkan atau sembunyikan item berdasarkan kategori
    menuItems.forEach((menuItem) => {
      const itemCategory = menuItem.getAttribute("data-category");

      if (filterCategory === "all" || itemCategory === filterCategory) {
        menuItem.style.display = "block"; // Tampilkan item
      } else {
        menuItem.style.display = "none"; // Sembunyikan item
      }
    });
  });
});

//cart shooping

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-card");
  const cardItemCount = document.querySelector(".add-to-card");
  const cardItemsList = document.querySelector(".card-items");
  const cardTotal = document.querySelector(".cart-total");
  const cardIcon = document.querySelector(".cart-icon");
  const sidebar = document.querySelector(".sidevar");
});
