let productArr = [
    {Image: "https://www.sephora.com/productimages/sku/s2569358-main-zoom.jpg?imwidth=612",
    name: "MAKEUP BY MARIO",
    des:"SoftSculpt® Transforming Skin Perfector",
    price: 56,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2508141-main-zoom.jpg?imwidth=612",
    name: "Gucci",
    des:"Brume de Beauté Beauty Mist",
    price: 76,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2570075-main-zoom.jpg?imwidth=612",
    name: "Smashbox",
    des:"Mini Halo Healthy Glow Tinted Moisturizer Broad Spectrum SPF 25 with Hyaluronic Acid",
    price: 15,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2555100-main-zoom.jpg?imwidth=465",
    name: "LAWLESS",
    des:"Mini The One & Done Volumizing Mascara",
    price: 15,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2536308-main-zoom.jpg?imwidth=612",
    name: "Summer Fridays",
    des:"ShadeDrops Broad Spectrum SPF 30 Mineral Milk Sunscreen",
    price: 36,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2590446-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Glamnetic",
    des:"Magnetic Half Lashes",
    price: 25,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2553055-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Valentino",
    des:"Mini Born In Roma Perfume Set",
    price: 35,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2520237-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Benefit Cosmetics",
    des:"Multitasking Cheek Brush for Powder Blush, Bronzer & Highlighter",
    price: 32,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2572147-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "HAUS LABS BY LADY GAGA",
    des:"Le Monster Lip Crayon Lipstick",
    price: 22,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2535748-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "Supergoop!",
    des:"SPF Yeah! Sunscreen Kit",
    price: 35,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2577443-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Sol de Janeiro",
    des:"Brazilian Crush Cheirosa ’68 Beija Flor™ Hair & Body Fragrance Mist",
    price: 35,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2572568-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "HAUS LABS BY LADY GAGA",
    des:"Bio-Radiant Gel-Powder Highlighter with Fermented Arnica",
    price: 40,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2533339-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Peter Thomas Roth",
    des:"FIRMx® Collagen Face & Eye Hydra-Gel Patches",
    price: 65,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2579555-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "PAT McGRATH LABS",
    des:"Mini Eye Shadow Palette: Midnight Voyage",
    price: 29,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2539294-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "Olaplex",
    des:"No. 9 Bond Protector Nourishing Hair Serum",
    price: 28,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2571958-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "HAUS LABS BY LADY GAGA",
    des:"PhD Hybrid Lip Oil",
    price: 24,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2572469-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "HAUS LABS BY LADY GAGA",
    des:"Power Sculpt Velvet Bronzer with Fermented Arnica",
    price: 38,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2564284-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "LYS Beauty",
    des:"No Limits Cream Bronzer and Contour Stick",
    price: 19,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2532786-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Dermalogica",
    des:"Daily Milkfoliant Exfoliator",
    price: 64,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2513851-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "MAKE UP FOR EVER",
    des:"Mini HD Skin Undetectable Longwear Foundation",
    price: 22,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2578052-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Sol de Janeiro",
    des:"Cheirosa Sea & Sol Hair & Body Fragrance Mist",
    price: 20,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2511194-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Yves Saint Laurent",
    des:"NU LIP & CHEEK BALMY TINT with Hyaluronic Acid",
    price: 26,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2537728-main-zoom.jpg?imwidth=4650",
    name: "Vegamour",
    des:"GRO Ageless Gray Delay™ Hair Supplement",
    price: 78,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2585628-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "tarte 1",
    des:"tartelette™ tubing mascara",
    price: 24,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2540227-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Dyson",
    des:"Limited Edition Supersonic™ Hair Dryer Gift Set",
    price: 429,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2591485-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "GXVE BY GWEN STEFANI",
    des:"Xtra Sauce Longwear Vinyl Liquid Lipstick",
    price: 24,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2537736-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=135",
    name: "Vegamour",
    des:"GRO AGELESS Anti-Gray Hair Serum ",
    price: 78,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},


    {Image: "https://www.sephora.com/productimages/sku/s2577310-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Bobbi Brown",
    des:"Crushed Oil-Infused Gloss Shimmer",
    price: 29,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2535615-main-zoom.jpg?imwidth=135&pb=clean-planet-positive-badge-2021&imwidth=135",
    name: "Glow Recipe",
    des:"Strawberry Smooth BHA + AHA Salicylic Acid Serum",
    price: 40,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2566651-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "St. Tropez",
    des:"Gradual Tan Classic Daily Youth Boosting Cream",
    price: 29,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2590248-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "tarte",
    des:"Mini Clay Play To-Go Cheek Palette",
    price: 21,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2594406-main-zoom.jpg?imwidth=135&imwidth=135",
    name: "Kaja",
    des:"Viva Shine Bento All Over Highlighter Trio",
    price: 28,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2587301-main-zoom.jpg?imwidth=612",
    name: "tarte",
    des:"Mini Clay Play To-Go Cheek Palette",
    price: 21,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2563559-main-zoom.jpg?imwidth=612",
    name: "tarte",
    des:"Mini Clay Play To-Go Cheek Palette",
    price: 21,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: "https://www.sephora.com/productimages/sku/s2585677-main-zoom.jpg?imwidth=612",
    name: "tarte",
    des:"Mini Clay Play To-Go Cheek Palette",
    price: 21,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

    {Image: " https://www.sephora.com/productimages/sku/s2567923-main-zoom.jpg?imwidth=612",
    name: "tarte",
    des:"Mini Clay Play To-Go Cheek Palette",
    price: 21,
    Star:"https://cdn-icons-png.flaticon.com/512/156/156855.png"},

   

]

let singleProductData = JSON.parse(localStorage.getItem("storeProductData"))
let arr =  JSON.parse(localStorage.getItem("storeProductData")) || []

productArr.map(function(elem,index){
 let div = document.createElement("div");
 div.addEventListener("click", function(){
    redirecttoproductpage(elem,index)
 })

 let newbox = document.createElement("h5");
newbox.innerText="NEW"

let wishlist = document.createElement("img")
wishlist.id="wish"
wishlist.setAttribute("src","https://cdn-icons.flaticon.com/png/512/3870/premium/3870922.png?token=exp=1655311731~hmac=4bde39989add48152d945c7904ccf6cb")
wishlist.style.width="25px";

 let img= document.createElement("img");
 img.setAttribute("src", elem.Image);

 let h1 = document.createElement("h1");
 h1.innerText=elem.name;

 let p1 = document.createElement("p");
 p1.innerText = elem.des;

 let p2 = document.createElement("p");
 p2.innerHTML=  "$"+elem.price;

 let star = document.createElement("img");
 star.setAttribute("src", elem.Star);

 div.append(newbox,wishlist,img,h1,p1,p2,star)
 document.querySelector("#product").append(div)

})

function redirecttoproductpage(elem,index){
    window.location.href="singleProduct.html"
if(arr.length){
    arr.pop()
}
    arr.push(elem)
    localStorage.setItem("storeProductData",JSON.stringify(arr))


}


