import populateList from './populateList';
import { addEditHandlers } from './editTask';

export default function addTaskHandler() {
  // new task - keyboard listener
  const inputTask = document.querySelector('#create-task-text');
  inputTask.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const newTask = { description: inputTask.value, completed: false, index: tasks.length };
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      populateList(newTask);
      inputTask.value = '';
      addEditHandlers(); // edit handler for new task
      console.log(tasks);
    }
  });

  // new task button listener
  const formAddBtn = document.querySelector('#list-container > div > span');
  formAddBtn.addEventListener('click', (e) => {
    const taskInput = e.target.previousElementSibling;
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { description: taskInput.value, completed: false, index: tasks.length };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateList(newTask);
    taskInput.value = '';
    addEditHandlers(); // edit handler for new task
    console.log(tasks);
  });
}