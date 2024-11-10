document.addEventListener("DOMContentLoaded",diplayCart())

function diplayCart(){
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let cart=JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    cartContent.innerHTML="";
    let total=0;
    if(cart.length==0){
        cartContent.innerHTML=`<p class="empty-message">Your Cart Is Empty.start</p>`
        totalPrice.innerHTML="";
        return;
    }
        cart.map((product,index)=>{
            total +=product.price;
            let productDiv=document.createElement("div");
            productDiv.classList.add("product-info");
            productDiv.innerHTML=`
            <div id="img-prod"
            <div class="img">
             <img src="${product.images[0]}" alt="${product.title}"/>;
            </div>
            <div class="product-details">
            
            <h2>${product.title}</h2>
            <p>Availability:${product.availabilityStatus}</p>
            <p>Category:${product.category}</p>
            </div>
           </div>
        cartContent.appendChild(productDiv)`

        })
}

function removeFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    diplayCart();
}