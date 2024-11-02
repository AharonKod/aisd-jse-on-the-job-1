document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const totalDisplay = document.querySelector('.total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            const productPrice = parseFloat(button.parentElement.querySelector('p').textContent.slice(1));
            addItemToCart(productName, productPrice);
            updateCartDisplay();
        });
    });

    function addItemToCart(name, price) {
        const item = cart.find(product => product.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
            cartItems.appendChild(cartItem);
        });
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }
});

document.querySelector('.checkout-btn').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});
