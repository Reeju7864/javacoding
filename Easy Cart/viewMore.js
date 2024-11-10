document.addEventListener("DOMContentLoaded",()=>{
    let products=JSON.parse(localStorage.getItem("products"))
    let productDetails=document.getElementById("productDetails");
    let selectedProductId=localStorage.getItem("selectedProductId");
    if(products && selectedProductId){
let selectedProductId=products.find(
    (product)=>{
        product.id==selectedProductId
    }
);
if(selectedProduct){
    console.log(selectedProduct);
    productDetails.innerHTML=`
    <main>
    
    <div id="tophalf">
    <div id="pimg">
    <img src="${selectedProduct.images[0]}"/>
    
    </div>

    <div id="pdetail">
    <h2 id="title">${selectedProduct.title}</h2>
    <p id="brand"><strong>Brand:</strong>${selectedProduct.brand}</p>
    <p id="category"><strong>Category:</strong>${selectedProduct.category}</p>
    <p id="descrip"><strong>Description:</strong>${selectedProduct.decription}</p>
    <p id="price"><strong>Price:</strong>${selectedProduct.price}</p>
    <div id="butn">
      <button id="addToCart">Add To Cart</button>
      <button id="backToHome">Back To Home</button>
    </div>
    </div>
    </div>

    <div id="review">
    <h1>Customer Reviews</h1>
    <hr>
    ${selectedProduct.reviews.map((review)=>{
        <div id="ratings">${"♥".repeat(review.rating)}${"♥".repeat($*review.rating)}</div>
 })}
         <p id="Comment">${review.comment}</p>
         <p id="nam">By <strong>${review.review}</strong> on ${new Date(review.date)}</p>
         <hr>
   
)}
    </div>
    
    </main>`
    






document.getElementById("addToCart").addEventListener("click",()=>{
    addToCart(selectedProduct)
});

document.getElementById("backToHome").addEventListener("click",()=>{
    window.location.href="./home.html";
});

}
else{
    productDetails.innerHTML="<p>Product Not Found</p>"
}
}else{
productDetails.innerHTML="<p>No Product Selected</p>"
}
});


function addToCart(){
    let cart=JSON(localStorage.getItem("cart"))
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added to cart")
}