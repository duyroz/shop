// script.js

// Array to store cart items
let cart = [];

// Toggle catalog panel (slide in/out from left)
function toggleCatalog() {
  const catalogPanel = document.getElementById('catalog-panel');
  catalogPanel.classList.toggle('active');
}

// Toggle cart panel (slide in/out from right)
function toggleCart() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.classList.toggle('active');
}

// Example function to add an item to the cart
function addToCart(item) {
  cart.push(item);
  updateCartPanel();
  alert(`${item} has been added to your cart!`);
}

// Update the content of the cart panel
function updateCartPanel() {
  const cartItemsPanel = document.getElementById('cart-items-panel');
  if (cart.length === 0) {
    cartItemsPanel.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  let html = '<ul>';
  cart.forEach(function(item) {
    html += `<li>${item}</li>`;
  });
  html += '</ul>';
  cartItemsPanel.innerHTML = html;
}
