"use strict";
// ØVELSE 15
window.addEventListener("load", initApp);

let products = [];
let basket = [];

async function initApp() {
  products = await getProducts();
  console.log(products);
  showProducts(products);
}

async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

function showProducts() {
  for (const product of products) {
    document.querySelector("#products").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `

  <article>
<h3>${product.name}</h3>
<p>vægt${product.weight} g</p>
<p>pris${product.price},-</p>
<button>Læg i kurv</button>
</article>


`
    );
    document.querySelector("#products article:last-child button").addEventListener("click", () => addToBasket(product));
  }
}

function addToBasket(product) {
  basket.push(product);

  document.querySelector("tbody").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `

            <tr>
              <td>${product.name}PRODUKTNAVN</td>
            //   <td>PRIS PR STK${product.price},-</td>
            </tr>

`
  );
}
