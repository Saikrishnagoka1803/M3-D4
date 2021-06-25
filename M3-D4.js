
window.onload = function()
{
  firstFun("books")
  //creatingCards(booksdata)
}

const creatingCards = function(booksdata){
      let createDiv = document.createElement('div')
      createDiv.classList.add('col-12 col-sm-6 col-md-4 col-lg-3 mb-4')
      createDiv.innerHTML = `<div class= 'card'>
        <img src=${booksdata[i].img} class="card-img-top img-fluid" alt="...">
        <div class="card-body">
                <h5 class="card-title">${booksdata[i].title}</h5>
                <p class="card-text"><i>${booksdata[i].category}</i></p>
                <p class="card-text"><b>€${booksdata[i].price}</b></p>
                <button class="add btn btn-dark">Add to Cart</button>
                <button class="remove btn btn-danger d-none">Remove from cart</button> </br>
                <button class="ignore btn btn-outline-secondary">Ignore</button>
              </div>
        </div>`
        const selectContainer = document.querySelectorAll('#cards-container div.toappend')
        selectContainer.appendChild(createDiv)

        const addButton = document.querySelector('.add')
        addButton.addEventListener('onclick',addtocart)

        const removeButton = document.querySelector('.remove')
        removeButton.addEventListener('onclick', removefromcart)

        const ignoreButton = document.querySelector('.ignore')
        ignoreButton.addEventListener('onclick', ignoreCard)
}
const firstFun = (query) => 
{
    fetch(`https://striveschool-api.herokuapp.com/${query}`)
    .then(response => response.json())

    .then(booksdata => {
    console.log(booksdata) 
    booksdata.foreach(booksdata => creatingCards(booksdata))
    })
   
    .catch(() => alert("Error"))
      
}  


	

   /* const getBooks = function (query) {
        fetch(`https://striveschool-api.herokuapp.com/${query}`)
          .then((response) => response.json())
          .then((booksList) => {
            console.log(booksList)
           
            booksList.forEach((book) => {
              const col = document.createElement("div")
              col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4")
              col.innerHTML = `<div class="card">
              <img src="${book.img}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text"><i>${book.category}</i></p>
                <p class="card-text"><b>€${book.price}</b></p>
                <button class="add-to-cart btn btn-dark">Add to Cart</button>
                <button class="remove-from-cart btn btn-danger d-none">Remove from cart</button> </br>
                <button class="ignore-button btn btn-outline-secondary">Ignore</button>
              </div>
            </div>`
      
              const row = document.querySelector("#books-container div.row")
              row.appendChild(col)
      
              const addButton = col.querySelector(".add-to-cart")
              addButton.addEventListener("click", addBookToCart)
      
              const removeButton = col.querySelector(".remove-from-cart")
              removeButton.addEventListener("click", removeBookFromCart)
      
              const ignoreButton = col.querySelector(".ignore-button")
              ignoreButton.addEventListener("click", ignoreBook)
            })
          })
          .catch(() => alert("Error"))
      }*/
      
