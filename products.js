const products = [
  { name: "Phone", price: 300, category: "electronics" },
  { name: "T-Shirt", price: 20, category: "fashion" },
  { name: "Laptop", price: 900, category: "electronics" },
  { name: "Jeans", price: 40, category: "fashion" }
];

function renderProducts() {
  const container = document.getElementById('productContainer');
  const filter = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('priceSort').value;

  let filtered = products.filter(p => filter === 'all' || p.category === filter);

  filtered.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);

  container.innerHTML = '';
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h4>${p.name}</h4><p>$${p.price}</p><p>${p.category}</p>`;
    container.appendChild(div);
  });
}

renderProducts();
