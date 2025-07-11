const taskList = document.getElementById('taskList');

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    saveTask(task);
    input.value = '';
  }
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

loadTasks();
