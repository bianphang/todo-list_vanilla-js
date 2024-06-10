document.addEventListener('DOMContentLoaded', function () {
  const addForm = document.getElementById('addForm');
  const addInput = document.getElementById('addInput');
  const todoList = document.getElementById('todoList');

  addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoText = addInput.value.trim();
    if (todoText !== '') {
      addTodoItem(todoText);
      addInput.value = '';
    }
  });

  function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const label = document.createElement('span');
    label.className = 'todo-label';
    label.textContent = text;

    const actions = document.createElement('div');
    actions.className = 'todo-action';

    const editBtn = document.createElement('button');
    // editBtn.className = 'btn btn-edit';
    // editBtn.textContent = 'Edit';
    // editBtn.addEventListener('click', function () {
    //   const newText = prompt('Edit todo:', label.textContent);
    //   if (newText !== null) {
    //     label.textContent = newText;
    //   }
    // });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      todoList.removeChild(li);
    });

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-done';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function () {
      li.classList.toggle('done');
      if (li.classList.contains('done')) {
        doneBtn.textContent = 'Undone';
      } else {
        doneBtn.textContent = 'Done';
      }
    });

    actions.appendChild(doneBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(label);
    li.appendChild(actions);

    todoList.appendChild(li);
  }
});
