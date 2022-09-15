import faker from 'faker'

function renderCart(el) {
  const html = `<div>You have ${faker.random.number()} items in the cart</div>`
  el.innerHTML = html
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart')
  el && renderCart(el)
}

export { renderCart }