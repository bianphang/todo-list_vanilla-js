// script.js
document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const taskText = document.getElementById('todo-input').value;
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">Update</button>
            <button onclick="completeTask(this)">Done</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

  document.getElementById('todo-list').appendChild(li);
  document.getElementById('todo-input').value = '';
}

function editTask(button) {
  const li = button.parentNode.parentNode;
  const span = li.querySelector('span');
  const newTask = prompt('Update your task', span.innerText);
  if (newTask) {
    span.innerText = newTask;
  }
}

function completeTask(button) {
  const li = button.parentNode.parentNode;
  li.classList.toggle('done');
}

function deleteTask(button) {
  const li = button.parentNode.parentNode;
  li.remove();
}
