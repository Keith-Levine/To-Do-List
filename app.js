// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')
const completedDiv = document.querySelector('.completed')
const thingsToDo = []

// DOM manipulation to render items
const renderList = () => {
    const toDoItem = document.createElement('div')
    const completeBtn = document.createElement('button')
    completeBtn.innerText = 'Completed'
    completeBtn.setAttribute('id', 'lists')

    // displays inner tect from form and adds class
    thingsToDo.forEach((item) => {
        toDoItem.innerText = item
        toDoItem.className = 'todo-item'
        todoContainer.append(toDoItem)
        toDoItem.append(completeBtn)
    })

    // Move toDo item to completed
    completeBtn.onclick = () => {
        completedDiv.append(toDoItem)
        toDoItem.className = 'done-item'
        completeBtn.remove()
        
        const removeBtn = document.createElement('button')

        removeBtn.innerText = 'Remove'
        toDoItem.append(removeBtn)

        removeBtn.onclick = () => {
        toDoItem.remove()
        }
    }
}

// onclick function to render the list
submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    thingsToDo.push(inputValue)
    document.querySelector('#input-box').value = ''
    renderList()
}
