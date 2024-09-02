const mySub = document.querySelector('.buttonOn')
const popUpContainer = document.querySelector('.fun')

mySub.addEventListener('click', $addmodal)

function $addmodal(){
    popUpContainer.classList.add('display-modal')
}

const myClose = document.querySelector('.button')
myClose.addEventListener('click', $removemodal)

function $removemodal(){
    popUpContainer.classList.remove('display-modal')
}