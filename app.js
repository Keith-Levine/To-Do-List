// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')
const completedDiv = document.querySelector('.completed')

// Create Elements
const removeBtn = document.createElement('button')
let listItemDiv = document.createElement('div')
let completeBtn = document.createElement('button')

const todoArray = []

// DOM manipulation to render items
const renderList = () => {
    completeBtn.innerText = 'Completed'
    completeBtn.setAttribute('id', 'lists')

    todoArray.forEach((item) => {
        listItemDiv.innerText = item
        listItemDiv.className = 'todo-item'
        todoContainer.append(listItemDiv)
        listItemDiv.append(completeBtn)
    })
}

completeBtn.onclick = () => {
    completedDiv.append(listItemDiv)
    listItemDiv.className = 'done-item'
    completeBtn.remove()
    removeBtn.innerText = 'Remove'

    listItemDiv.append(removeBtn)
    removeBtn.onclick = () => {
        listItemDiv.remove()
    }
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    todoArray.push(inputValue)
    console.log(todoArray)
    renderList()
}