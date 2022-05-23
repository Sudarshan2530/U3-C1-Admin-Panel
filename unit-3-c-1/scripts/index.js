//store the products array in localstorage as "products"
let products = JSON.parse(localStorage.getItem("products")) ||[];

// console.log(products)

function Products(t, d, p, i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function productData(){
    event.preventDefault();

    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    // console.log("data")

    let p1 = new Products(type, desc, price, image);
products.push(p1);

form.type.value="";
form.desc.value="";
form.price.value="";
form.image.value="";

localStorage.setItem("products", JSON.stringify(products));
}