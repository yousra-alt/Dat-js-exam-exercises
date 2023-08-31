"use strict";

let products = [
  { productName: "chair", price: 100, inStock: true },

  { productName: "table", price: 50, inStock: false },

  { productName: "spoon", price: 10, inStock: true },
];
window.addEventListener("load", start);

function start() {
  showProducts(products);
  document.querySelector("#create-form").addEventListener("submit", createNewProduct);
}




function showProducts(products) {
    document.querySelector("#list-container").innerHTML="";
  for (const product of products) {
    if (product.inStock === true) {
      document.querySelector("#list-container").insertAdjacentHTML(
        "beforeend",
        /*HTML*/ `
<p>${product.productName}</p>
<p>${product.price}</p>
<p>${product.inStock}</p>



`
      );
    }
  }
}

function createNewProduct(event) {
  event.preventDefault();
  const form = event.target;
  const productName = form.name.value;
  const price = Number(form.price.value);
  const inStock = form.stock.value === "on";

  const newProduct = { productName, price, inStock };

  products.push(newProduct);
  console.log(products);
  showProducts(products);

//   checkbox value er forkert, viser on eller true. checkbox i stedet for radio?
}
