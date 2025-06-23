const products = [
    { id: 1, name: 'Producto 1', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 39.99, image: 'https://via.placeholder.com/150' }
];

const cart = [];

function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'product';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        container.appendChild(item);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        document.getElementById('cart-count').textContent = cart.length;
    }
}

window.addEventListener('DOMContentLoaded', renderProducts);
