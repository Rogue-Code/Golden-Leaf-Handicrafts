const productCategories = document.querySelectorAll(".product-categorie")
productCategories.forEach((element) => {
    element.addEventListener('click',handleClick)
})

const itemCards = document.querySelectorAll(".item-card");
itemCards.forEach((element) => {
    element.addEventListener('click', ()=> {
        location.href = "https://api.whatsapp.com/send?phone=919869729680";
    })
})
const questions = document.querySelectorAll(".text-container")
const quesArr = Array.from(questions)
const ques = quesArr.filter((element) => !element.classList.contains("text-box"))
ques.forEach((element) => {
    element.addEventListener('click',tabs)
})

const dropDownItems = document.querySelectorAll(".dropdown-item")
dropDownItems.forEach((element) => {
    element.addEventListener('click',navClick)
    })

let globalSelected = window.location.search.slice(6,window.location.search.length)?window.location.search.slice(6,window.location.search.length):''

function handleClick(event) {
    const prevActive = document.querySelector(".product-categorie.active")
    prevActive.classList.remove('active')
    event.target.classList.add("active")
    const prevShow = document.querySelector(".product-item.active")
    const newShow = document.querySelector(`.${event.target.textContent}`)
    prevShow.classList.remove('active')
    newShow.classList.add('active')
    prevShow.classList.remove('active')
    newShow.classList.add('active')
}

function tabs(event){
    if(document.querySelector(`#text-box-${this.id}`).classList.contains('active'))
    {
        document.querySelector(`#text-box-${this.id}`).classList.remove('active')
    }
    else
    {
        document.querySelector(`#text-box-${this.id}`).classList.add('active')
    }
}

function navClick(event){
    let selectedCategory = event.target.textContent.toLowerCase()
    if(window.location.pathname === '/products.html'){
        event.preventDefault()
    }
    else if(window.location.pathname !== '/products.html'){
        window.location.href = `/products.html?name=`+encodeURIComponent(selectedCategory)
    }
    
    selectedCategory = document.querySelector(`#${selectedCategory}`)
    const eventObject = {
        target:selectedCategory
    }
    console.log(eventObject.target)
    handleClick(eventObject)
    
}


window.onload = function(){
    //const random = '/products.html'
    //console.log(`${window.location.host}${random}`)
    if(window.location.pathname === '/products.html'){
        //console.log('this worked',globalSelected)
        const selectedNew = document.querySelector(`#${globalSelected}`)
        const eventObject = {
        target:selectedNew
    }
    console.log(eventObject.target)
    handleClick(eventObject)

    }
}