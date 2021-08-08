
window.onload = function()
{
  firstFun('books')
}

const creatingCards = function(b){

  let createrow = document.createElement('div')
   createrow.classList.add('row')
   b.forEach(element => {
    let createCol = document.createElement('div')
      
      createCol.classList.add("col-3", "col-sm-6", "col-md-4", "col-lg-3", "mb-4","mt-4")
      createCol.innerHTML = `<div class=" card">
        <img src=${element.img} class="card-img-top img-fluid" alt='' style='height:25.5rem'>
        <div class=" card-body bg-warning">
                <p class="card-title text-ellipsis"><b>${element.title}</b></p>
                <p class="card-text"><b>${element.category}</b></p>
                <p class="card-text"><b>€${element.price}</b></p>
                <button class="add-cart btn btn-success mb-2">Add to Cart</button>
                 </br>
                <button class="ignore btn btn-info ">Ignore</button>
              
              </div>
        </div>`
        
        createrow.appendChild(createCol)
  })
  
        let selectContainer = document.querySelector('.toappend')
        selectContainer.appendChild(createrow)
        styleOnAddButton()
}

const firstFun = (q) => 
{
    fetch(`https://striveschool-api.herokuapp.com/${q}`)
    .then(response => response.json())
    .then((booksdata) => {
      console.log(booksdata)
      
      creatingCards(booksdata)

    })
   
    .catch(() => alert("Error"))
      
}  

const styleOnAddButton = function(){
  let addCart = document.querySelectorAll('.add-cart')
  
  addCart.forEach(element => {
  element.addEventListener('click',function(e){
    element.classList.add('bg-primary')
 
   console.log(e.target.parentNode)
   let parent = e.target.parentNode
   console.log(parent.parentNode)
   let realCard = parent.parentNode
   parent.classList.remove('bg-warning')
   parent.setAttribute('style',"background-color:green")
   parent.classList.add('removingNow')

    //let cardSelection = document.querySelector('.card')
    
    let cartRow = document.querySelector('.cartRow')
    let cartcol = document.createElement('div')
    cartcol.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4","mt-4")
    cartcol.appendChild(realCard)
    cartRow.appendChild(cartcol)

    //console.log(document.body.children)
    

    let cartCount=document.querySelector('#cart')
    cartCount.innerText = parseInt(cartCount.innerText) + 1

    removingFromCart(parent)
    })
   
  })
}

const removingFromCart = function(p){

  //let removefrom = document.querySelector('.removingNow .remove')
  //removefrom.innerText = 'remove Now'
  p.innerHTML=`<button class="remove btn btn-danger mb-2">Remove from cart</button>`
  let removeFromCart = document.querySelectorAll('.remove')
    removeFromCart.forEach(ele => {
      ele.addEventListener('click', function(e){

        console.log('once')
        let removingnode = e.target.parentNode.parentNode
        removingnode.remove()

       
      
        let cartCount=document.querySelector('#cart')
    cartCount.innerText = parseInt(cartCount.innerText) - 1

      })
    })
    
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
      
