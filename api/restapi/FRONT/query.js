let button = document.querySelector('#view_all')
    button.addEventListener('click', fn)

let main = document.querySelector('#main')
function fn() {
    fetch("https://banywick.pythonanywhere.com/product_view/")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.map(item=>{
                main.innerHTML+=   `<div>
                                   <p>${item.title}</p>             
                                   <p>${item.price}</p>             
                                   <p>${item.category}</p>             
                                              
                                    </div>`
            })
        })

}
