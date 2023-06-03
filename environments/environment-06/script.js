"use strict";

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

function showProducts(products) {
  for (const product of products) {
    document.querySelector("#products").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `


<article>
<h3>${product.name}</h3>
<p>vægt: ${product.weight} g</p>
<p>pris: ${product.price},-</p>
<button id="putIn">Læg i kurv</button>
</article>

`
    );
    document.querySelector("#products article:last-child #putIn").addEventListener("click", () => putInBasket(product));
  }
}


function putInBasket(product) {
  basket.push(product);
  console.log(basket);
  showBasket(basket);
}

function showBasket(basketList) {
document.querySelector("#basket").innerHTML="";
  for (const bask of basketList) {
    document.querySelector("#basket").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `


<p>${bask.name}</p>
`
    );
  }
}
