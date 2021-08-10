console.log('hi')

// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')

const todoArray = []

// DOM manipulation to render items
const renderList = () => {
    let listItemDiv = document.createElement('div')
    let createBtn = document.createElement('button')
    createBtn.innerText = 'Completed'
    createBtn.setAttribute('id', 'lists')

    todoArray.forEach((item) => {
        listItemDiv.innerText = item
        listItemDiv.className = 'todo-item'
        todoContainer.append(listItemDiv)
        listItemDiv.append(createBtn)
    })
}

submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    todoArray.push(inputValue)
    console.log(todoArray)
    renderList()
}