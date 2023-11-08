function fetchProducts() {
    fetch("http://localhost:3000/all-products")
      .then((res) => res.json())
      .then((data) => showData(data.products));
  }
  
  // function showData(response){
  //     const responseDiv = document.getElementById("response");
  //     responseDiv.innerHTML = `
  //     <h1>Status: ${response.status}</h1>
  //     <h1>Message: ${response.message}</h1>
  //     `
  // }
  
  function showData(response) {
    const productInfoContainer = document.getElementById(
      "product-info-container"
    );
  
    response.forEach((singleProduct) => {
      productInfoContainer.innerHTML += `
      <div class="col card" style="width: 20rem; bg-red-500;">
      <img src="${singleProduct.thumbnail}" class="card-img-top" style="width: 100%; height: 15rem" alt="...">
      <div class="card-body">
      <h5 class="card-title">${singleProduct.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onclick="fetchSingleData('${singleProduct.id}')" class="btn btn-primary">Buy Now at $${singleProduct.price}</button>
      </div>
      </div>`;
    });
  }
  fetchProducts();
  
  function fetchSingleData(id) {
    fetch(`http://localhost:3000/single-product/${id}`)
      .then((res) => res.json())
      .then((data) => showDetails(data));
  }
  function showDetails(singleProduct) {
    const detailContainer = document.getElementById("single-product-container");
    detailContainer.innerHTML = `
    <div class="card mx-auto" style="width: 20rem; height: auto">
    <h2>Your selected product</h1><br>
    <img src="${singleProduct.images[1]}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${singleProduct.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h2>Price:$${singleProduct.price}</h2>
    </div>
    </div>`;
  }