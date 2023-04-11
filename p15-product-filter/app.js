const productList = document.querySelector(".product-list");
const search = document.querySelector("#search");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    productList.innerHTML = "";
    products.forEach((product) => {
      const newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
      <img src="${product.image}" class="product-img">
      <div class="product-info">
          <h3>${product.title}</h3>
          <span>$${product.price}</span>
      </div>`;
      productList.appendChild(newProduct);
    });
  });

search.addEventListener("input", (e) => {
  console.log(e.target.value);
  const productListDOM = document.querySelectorAll(".product");
  productListDOM.forEach((product) => {
    if (
      !product.innerText
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase())
    ) {
      product.classList.toggle("hide", true);
    } else {
      product.classList.toggle("hide", false);
    }
  });
});
