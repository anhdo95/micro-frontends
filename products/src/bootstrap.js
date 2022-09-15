import faker from 'faker'

function renderProducts(el) {
  const products = []
  
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products.push(name)
  }
  
  const html = products.reduce((html, product) => html += `<div>${product}</div>`, '')
  el.innerHTML = html
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products')
  el && renderProducts(el)
}

export { renderProducts }