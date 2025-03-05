// Selecting the necessary elements
const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
addButton.addEventListener('click', function () {
    const todoText = inputField.value.trim();

    if (todoText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${todoText} <button class="delete-btn">Delete</button>`;
        
        // Append the new task to the list
        todoList.appendChild(li);

        // Clear the input field
        inputField.value = '';

        // Add delete functionality
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
    }
});

// Optional: Press Enter to add task as well
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});