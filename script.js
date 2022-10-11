const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list'); 

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


function addTodo(event) {
    event.preventDefault();
    
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ''){
        return null
    }
    
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_button')
    todoDiv.appendChild(completedButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_button')
    todoDiv.appendChild(deleteButton);
    
    todoList.appendChild(todoDiv);
    
    todoInput.value = ''
}


function deleteCheck(e) {
    const item = e.target;
    
    if (item.classList[0] === "delete_button") {
        let todo = item.parentElement;
       
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    
    if (item.classList[0] === "complete_button") {
        let todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

