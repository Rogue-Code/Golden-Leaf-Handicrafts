// Pulling all buy buttons down
// var buyBtn = document.querySelectorAll(".item-card > p");
// buyBtn.style.backgroundColor = 'blue'; 


const productCategories = document.querySelectorAll(".product-categorie")
productCategories.forEach((element) => {
    element.addEventListener('click',handleClick)
})

const itemCards = document.querySelectorAll(".item-card");
itemCards.forEach((element) => {
    element.addEventListener('click', ()=> {
        location.href = "https://api.whatsapp.com/send?phone=919082736582";
    })
})
const questions = document.querySelectorAll(".text-container")
const quesArr = Array.from(questions)
const ques = quesArr.filter((element) => !element.classList.contains("text-box"))
ques.forEach((element) => {
    element.addEventListener('click',tabs)
})

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