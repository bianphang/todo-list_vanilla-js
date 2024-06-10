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
    editBtn.style.display = todoItem.classList.contains('done')
      ? 'none'
      : 'inline-block';

    // Change Done button text based on done status
    if (todoItem.classList.contains('done')) {
      doneBtn.textContent = 'Undone';
      doneBtn.classList.remove('btn-done');
      doneBtn.classList.add('btn-undone'); // Add a new class for Undone button
    } else {
      doneBtn.textContent = 'Done';
      doneBtn.classList.remove('btn-undone');
      doneBtn.classList.add('btn-done');
    }
  });
}
