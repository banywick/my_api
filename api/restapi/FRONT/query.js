let button = document.querySelector('#view_all')
button.addEventListener('click', getProducts)

document.addEventListener("DOMContentLoaded", init);


function init() {
    getProducts();
}


function getProducts() {

    fetch('http://127.0.0.1:8000/product_view/')
        .then(resp => resp.json())
        .then(renderProduct)
}

const renderProduct = (data) => {

    const productContainer = document.querySelector('#main')
    productContainer.innerHTML = '';
    const productsList = data.map(item => {
        return `<div class="product">
                   <p class="product__title">${item.title}</p>
                   <div class="product__img">
                   <img src="${item.imgSrc}" alt="${item.title}">
                    </div>
                   <p class="product__price"> Цена :${item.price}</p>
                   <p class="product__category">Категория: ${item.category.title}</p>
                 </div>`
    })
    productsList.forEach(el => {
        productContainer.insertAdjacentHTML('beforeend', el);
    })

}

document.addEventListener("DOMContentLoaded", get_cat);
const  cat = document.querySelector('#cat_view')
    function get_cat() {
        fetch('http://127.0.0.1:8000/category/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.map(item=>{
                cat.innerHTML+=   `<ul class="cat">
                                    <li>${item.title}</li>
                                    </ul>`




   })
        })

}









