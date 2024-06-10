const addForm = document.getElementById('addForm');
const addInput = document.getElementById('addInput');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
  const todoText = addInput.value.trim();
  if (todoText !== '') {
    const newTodoItem = document.createElement('li');
    newTodoItem.classList.add('todo-item');
    newTodoItem.innerHTML = `
      <span class="todo-label">${todoText}</span>
      <div class="todo-action">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
        <button class="btn btn-done">Done</button>
      </div>
    `;
    todoList.appendChild(newTodoItem);
    addInput.value = ''; // Clear the input field

    // Add event listeners for edit, delete, and done buttons
    setupTodoItemEventListeners(newTodoItem);
  }
}

// Function to setup event listeners for each todo item
function setupTodoItemEventListeners(todoItem) {
  const editBtn = todoItem.querySelector('.btn-edit');
  const deleteBtn = todoItem.querySelector('.btn-delete');
  const doneBtn = todoItem.querySelector('.btn-done');

  // Edit button event listener
  editBtn.addEventListener('click', () => {
    const todoLabel = todoItem.querySelector('.todo-label');
    const currentText = todoLabel.textContent;
    const newText = prompt('Edit todo:', currentText);
    if (newText !== null) {
      todoLabel.textContent = newText;
    }
  });

  // Delete button event listener
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });

  // Done button event listener
  doneBtn.addEventListener('click', () => {
    todoItem.classList.toggle('done');
  });
}

// Add event listener to the add form
addForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  addTodo();
});

// Initial setup for any existing todo items
const existingTodoItems = todoList.querySelectorAll('.todo-item');
existingTodoItems.forEach(setupTodoItemEventListeners);
