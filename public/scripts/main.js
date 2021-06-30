import Modal from './modal.js'

// itens da modal
const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('#modal-buttons button.submit-modal') 

// Acionadores da modal
const checkLinks = document.querySelectorAll('.question-wrapper .question-actions a.check')
const deleteLinks = document.querySelectorAll('.question-wrapper .question-actions a.delete')

checkLinks.forEach(link => {
    link.addEventListener("click", handleClick)
})

deleteLinks.forEach(link => {
    link.addEventListener("click", event => handleClick(event,false))
})

function handleClick(event,check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida":"Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('button-red'):modalButton.classList.add('button-red')
    // Abrir o modal
    modal.open()
}