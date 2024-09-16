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
  const cartButton = document.querySelector(".fa-cart-shopping");
  const sidebar = document.getElementById("sidevar");
  const sidebarClose = document.querySelector(".sidebar-close");
  const cartItemsContainer = document.querySelector(".card-items");
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  loadCartFromStorage();
  const plusButtons = document.querySelectorAll(".cart-shop");

  const openSidebar = () => {
    sidebar.classList.add("sidebar-open");
  };

  const closeSidebar = () => {
    sidebar.classList.remove("sidebar-open");
  };

  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    openSidebar();
  });

  sidebarClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeSidebar();
  });

  plusButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const menuItem = button.closest(".menu");

      const itemName = menuItem.querySelector("li:nth-child(2)").textContent;
      const itemPrice = menuItem.querySelector(".cart-shooping li").textContent;

      if (cart[itemName]) {
        cart[itemName].quantity += 1;

        const cartItemElement = cartItemsContainer.querySelector(
          `[data-name="${itemName}"]`
        );
        cartItemElement.querySelector(
          ".item-name"
        ).textContent = `${itemName} (${cart[itemName].quantity})`;
      } else {
        cart[itemName] = {
          name: itemName,
          price: itemPrice,
          quantity: 1,
        };

        // Create new cart item HTML
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.setAttribute("data-name", itemName);
        cartItem.innerHTML = `
          <div class="item-name">${itemName}</div>
          <div class="item-price">${itemPrice}</div>
        `;

        // Append the new cart item to the cart items container
        cartItemsContainer.appendChild(cartItem);
      }

      // Save the updated cart to localStorage
      saveCartToStorage();

      // Optionally, update the total amount in the cart
      updateCartTotal();
    });
  });

  // Function to update the total cart amount
  function updateCartTotal() {
    let total = 0;

    // Loop through the cart object to calculate the total
    for (let item in cart) {
      total +=
        parseFloat(cart[item].price.replace(/[^0-9.-]+/g, "")) *
        cart[item].quantity;
    }

    // Update the total amount in the cart display
    document.querySelector(".cart-total").textContent = `$${total.toFixed(2)}`;
  }

  // Function to save the cart data to localStorage
  function saveCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Function to load the cart data from localStorage
  function loadCartFromStorage() {
    // If there's no data in localStorage, return early
    if (!localStorage.getItem("cart")) return;

    // Loop through the cart data and append each item to the cart
    for (let itemName in cart) {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.setAttribute("data-name", itemName); // Store the name in an attribute for easy lookup
      cartItem.innerHTML = `
        <div class="item-name">${itemName} (${cart[itemName].quantity})</div>
        <div class="item-price">${cart[itemName].price}</div>
      `;
      cartItemsContainer.appendChild(cartItem);
    }

    // Update the cart total
    updateCartTotal();
  }
});
