let dataFromNewProduct = JSON.parse(localStorage.getItem("storeProductData"));

let dataforCart = JSON.parse(localStorage.getItem("cart-page")) || [];

dataFromNewProduct.map(function (elem, index) {
  let Images = document.createElement("img");
  Images.setAttribute("src", elem.Image);

  document.querySelector("h1").innerText = elem.name;
  document.querySelector("h2").innerText = elem.des;
  document.querySelector("h3").innerText =
    "$ " + elem.price + " or 4 payments of $7.50 with Klarna";

  document.querySelector("button").addEventListener("click", function () {
    if (cartdata(elem.name)) {
    //   console.log("anchal", cartdata(elem.name));
      alert("ITEM ADDED SUCCESSFULLY");
      dataforCart.push(elem);
      localStorage.setItem("cart-page", JSON.stringify(dataforCart));
  
    } else {
      alert("product already in cart");
    }
  });
  document.querySelector("#left").append(Images);
});



function cartdata(id) {
  for (let i = 0; i < dataforCart.length; i++) {
    if (dataforCart[i].name == id) {
      return false;
    }
  }
  return true;
}
