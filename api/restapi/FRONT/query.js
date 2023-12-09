const API_URL = 'http://127.0.0.1:8000';

function initRefreshBtn() {
    let button = document.querySelector('#view_all')
    button.addEventListener('click', getProducts)


}


document.addEventListener("DOMContentLoaded", init);


function init() {
    getCategory();
    initRefreshBtn();
    getProducts();
}


function getProducts(id) {

    fetch(API_URL + `/product_view/${id ? id : ''}`)
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


function getCategory() {


    fetch(API_URL + '/category/')
        .then(response => response.json())
        .then(renderCategories)


}


const renderCategories = (data) => {
    const catContainer = document.querySelector('#cat_view')
    const list = document.createElement('ul')
    data.forEach(el => {
        const li = document.createElement('li')
        li.textContent = el.title;
        li.addEventListener('click', ()=>{
            console.log(el)
            getProducts(el.id)


        })
        list.appendChild(li)


    })
    // cat.innerHTML += `<ul class="cat">
    //                                 <li>${item.title}</li>
    //                                 </ul>`


    console.log(data)


    catContainer.appendChild(list)


}








