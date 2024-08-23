const buttons = document.querySelectorAll(".btn");

// Tambahkan event listener ke setiap tombol
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Arahkan ke halaman selanjutnya (misalnya halaman produk atau checkout)
    window.location.href = "../full-menu/full-menu.astro";
    // console.log("full-menu");
  });
});
