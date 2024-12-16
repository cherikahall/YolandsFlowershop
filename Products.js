const buyButtons = document.querySelectorAll(".buy-now-btn");

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent; 
        const productPrice = button.getAttribute("data-flower-price"); 
        addToCart(productName, productPrice);
    });
});

let cart = [];
function addToCart(product, price) {
    cart.push({ name: product, price: parseFloat(price) }); 
    updateCartDisplay();
    alert(`${product} has been added to your cart for $${price}!`);
}

function updateCartDisplay() {
    const cartSection = document.getElementById("cart");
    cartSection.innerHTML = "<h3>Your Cart:</h3>";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.textContent = `${index + 1}. ${item.name} - $${item.price.toFixed(2)}`;
        cartSection.appendChild(cartItem);
    });

    const totalDisplay = document.createElement("div");
    totalDisplay.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartSection.appendChild(totalDisplay);
}
