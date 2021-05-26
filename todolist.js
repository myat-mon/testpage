
    //Selectors
    const todoInput = document.querySelector('.todo_input');
    const todoButton = document.querySelector('.todo_button');
    const todoList = document.querySelector('.todo_list');
    //Event Listeners
    todoButton.addEventListener("click", addTodo)
    todoList.addEventListener("click", deleteCheck)
    //Functions

    function addTodo(event) {
        event.preventDefault();
        //Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //Create Check BUTTON
        const completedButton = document.createElement('div');
        // completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete_btn')
        todoDiv.appendChild(completedButton);

        //Todo LI 
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo_item');
        todoDiv.appendChild(newTodo);
        if(todoInput.value === ""){
            return null
        }
        
        //Delete BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete_btn')
        todoDiv.appendChild(deleteButton);

        //Append to Actual LIST
        todoList.appendChild(todoDiv);

        //Clear todo Input VALUE
        todoInput.value = ""
    }

    //DELETE & CHECK
    function deleteCheck(e) {
        const item = e.target;
        //DELETE ITEM
        if (item.classList[0] === "delete_btn") {
            const todo = item.parentElement;
            alert('Do you want to Delete task?');
            todo.remove()
        }
        //Check List
        if (item.classList[0] === "complete_btn") {
            const todo = item.parentElement;
            todo.classList.toggle("checkItem")
        }
    }
  