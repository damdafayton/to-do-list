import populateList from './populateList';

// new task - keyboard listener
const inputTask = document.querySelector('#list-container > div input[type=text]');
inputTask.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { description: inputTask.value, completed: false, index: tasks.length };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateList(newTask);
    inputTask.value = '';
    console.log(tasks);
  }
});

// new task click listener
const formAddBtn = document.querySelector('#list-container > div > span');
formAddBtn.addEventListener('click', (e) => {
  const taskInput = e.target.previousElementSibling;
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = { description: taskInput.value, completed: false, index: tasks.length };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  populateList(newTask);
  taskInput.value = '';
  console.log(tasks);
});