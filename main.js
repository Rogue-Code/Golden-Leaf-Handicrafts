const productCategories = document.querySelectorAll(".product-categorie")
productCategories.forEach((element) => {
    element.addEventListener('click',handleClick)
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
    const innerList = newShow.children
    const inner = innerList[0]
    if(inner.children.length % 2 === 0){
        inner.style.gridTemplateColumns = "repeat(2,1fr)"
    }
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