let products=[]
function fetchData(){
 fetch("http://dummyjson.com/products/").then((val)=>{
        return val.json()
    }).then((res)=>{
        console.log(res);
       products=res.products;
       localStorage.setItem("products",JSON.stringify(products));
       fetchProducts(products)
        })

}





function fetchProducts(products){
    let product="";
        // console.log(res.products);
       products.map((val)=>{
           product+=`
           <main>
           <div id="prodImage"><img src="${val.images[0]}"/>
           </div>
          
            <p id="title">${val.title}</p>
            <div id="rating"><span id="rating-box">${val.rating.toFixed(1)}</span><i id="star" class="fa-solid fa-star"></i></div>
            <div id="pricebox">
            
            <div id="price"><strong>Price:</strong><span id="cost">${val.price}</span></div>
            </div>
           
           <div><button id="view" onclick="viewMore($(val.id))">ViewMore</button></div>
           </div>
           </main>
            `
        });
        document.getElementById("containerBox").innerHTML=product;
        
}
fetchData();




function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filterProd=products.filter((product)=>{
        product.title.toLowerCase().includes(searchTerm);
        product.category.toLowerCase().includes(searchTerm);
    });
    fetchProduct(filterProd);
}
document.getElementById("searchProduct").addEventListener("input",searchItem);









function viewMore(productId){
    localStorage.setItem("selectedProductId",productId);
}
fetchData();