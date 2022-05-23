let products = JSON.parse(localStorage.getItem("products"))||[];

let allProducts = document.getElementById("all_products");
products.map(function(e, i){

    let div = document.createElement("div");

    let type = document.createElement("h3");
    type.innerText = e.type;
    let desc = document.createElement("p");
    desc.innerText = e.desc;
    let price = document.createElement("b");
    price.innerText = 'Rs. '+e.price;
    let image = document.createElement("img")
    image.src = e.image;
    image.style.width = "300px";
    image.style.height = "250px"

    let btn = document.createElement("button");
    btn.setAttribute ("id", "remove_product")
    btn.innerText = "Remove Product"
    btn.addEventListener("click", function(){
        products.splice(i,1);
        localStorage.setItem("products", JSON.stringify(products));
        window.location.reload();
    })

        div.append(image, type, desc, price,btn)
        allProducts.append(div);
})