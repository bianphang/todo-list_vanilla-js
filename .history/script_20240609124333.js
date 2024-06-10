document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText === '') return;

  const todoList = document.getElementById('todo-list');

  const listItem = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = todoText;
  listItem.appendChild(span);

  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';
  updateBtn.className = 'update';
  updateBtn.addEventListener('click', () => updateTodo(span));
  listItem.appendChild(updateBtn);

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.className = 'done';
  doneBtn.addEventListener('click', () => doneTodo(listItem));
  listItem.appendChild(doneBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.addEventListener('click', () => deleteTodo(listItem));
  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);
  todoInput.value = '';
}

function updateTodo(span) {
  const newTodoText = prompt('Update the todo:', span.textContent);
  if (newTodoText !== null) {
    span.textContent = newTodoText.trim();
  }
}

function doneTodo(listItem) {
  listItem.classList.toggle('done');
}

function deleteTodo(listItem) {
  listItem.remove();
}
