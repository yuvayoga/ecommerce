// Initialize or retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart and update localStorage
function addToCart(productName, productPrice) {
    const product = {
        productName: productName,
        price: productPrice
    };

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart.`);
    updateCartCount();
}

// Update the cart item count displayed on the cart page (or nav)
function updateCartCount() {
    const cartCount = cart.length;
    const cartButton = document.querySelector("nav ul li a[href='cart.html']");
    
    if (cartButton) {
        cartButton.textContent = `Cart (${cartCount})`;
    }
}

// Update the cart count when the page loads
window.onload = function() {
    updateCartCount();
};


