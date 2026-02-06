const productsContainer = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} SAR</p>
    <a href="${product.paymentLink}" class="btn-gold" target="_blank">Buy Now</a>
  `;

  productsContainer.appendChild(card);
});
