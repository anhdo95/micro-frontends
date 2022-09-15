import { renderProducts } from 'products/ProductsIndex'
import { renderCart } from 'cart/CartShow'

console.log('Container!');

renderProducts(document.getElementById('micro-products'))
renderCart(document.getElementById('micro-cart'))