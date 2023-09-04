async function products() {
    let response = await fetch("https://dummyjson.com/products");
    let productsData = await response.json();
    return productsData.products;
}  
async function productCard(){
    let productsData = await products();
    let productsSection = document.querySelector(".products-section");
    for ( let product of productsData){
        productCardHTML=`
        <div class="product-card">
        <img src="${product.images[0]}"/>
      <div class="product-card-content">
        <span class="product-category">${product.category}</span>
        <div class="product-name">${product.title}</div>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-card-footer">
        <div class="product-wrapper">
          <div class="product-price">
            <span>${product.price}$</span>
          </div>
          <div class="product-rating">Rating: ${product.rating}</div>
        </div>
        <div class="button-wrapper">
          <button>Buy</button>
        </div>
      </div>
        `;
    productsSection.innerHTML += productCardHTML;
    } 
}
productCard();         