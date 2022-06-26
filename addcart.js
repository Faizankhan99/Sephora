let ProductData = JSON.parse(localStorage.getItem("cart-page")) || [];
console.log(ProductData);

display(ProductData);


function display(ProductData) {

  let sum=0
  let total=0
  let dis=0

  ProductData.forEach(function (elem,index) {

sum=sum+Number(elem.price)
total=sum

document.querySelector("#total").innerText="$ "+ total

document.querySelector("#bt").addEventListener("click",function(){
   let voucher=document.querySelector("#voucher").value;
// console.log("inner");
if(voucher==="masai30"){
  let per=total*10/100;
  dis=total-per
  // console.log(dis)
  // alert("you got discount")
  document.querySelector("#total").innerText='$'+dis;
  total= "$"+dis
}

})

    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.Image);

    let des = document.createElement("h4");
    des.innerText = elem.des;

    let name = document.createElement("h5");
    name.innerText = elem.name;

    let price=document.createElement("p");
    price.innerText = "$"+elem.price;

    let btn=document.createElement("button");
    btn.innerText = "Remove"
    btn.addEventListener("click", function() {
    remove (index)
    });

    box.append(image, name, des, price,btn);
    document.querySelector(".bthree").append(box);
  });

}


function remove(index) {
  ProductData.splice(index,1) 
  localStorage.setItem("cart-page",JSON.stringify(ProductData))
  window.location.reload();
}