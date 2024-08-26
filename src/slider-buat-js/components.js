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
