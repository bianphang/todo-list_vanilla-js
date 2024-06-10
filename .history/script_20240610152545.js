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
    // Add this line to hide the Edit button when Done is clicked
    editBtn.style.display = todoItem.classList.contains('done')
      ? 'none'
      : 'inline-block';
  });
}
