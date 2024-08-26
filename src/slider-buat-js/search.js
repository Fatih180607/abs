document.getElementById("search").addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const items = document.querySelectorAll(".menu.item");
  let hasVisibleItems = false; // Untuk melacak apakah ada item yang cocok

  items.forEach((item) => {
    const name = item.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      item.style.display = "block";
      hasVisibleItems = true; // Setel menjadi true jika ada item yang cocok
    } else {
      item.style.display = "none";
    }
  });

  // Menampilkan atau menyembunyikan pesan "Item tidak ditemukan"
  const noResultsMessage = document.getElementById("no-results");
  if (hasVisibleItems) {
    noResultsMessage.style.display = "none";
  } else {
    noResultsMessage.style.display = "block";
  }
});

// src/scripts/filter.js
document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");
  const menuItems = document.querySelectorAll(".menu.item");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = link.getAttribute("data-filter");

      menuItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
