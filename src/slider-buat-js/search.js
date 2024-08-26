document.getElementById("search").addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const items = document.querySelectorAll(".menu.item");
  items.forEach((item) => {
    const name = item.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
