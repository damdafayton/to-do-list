import populateList from './populateList';
import { addEditHandlers } from './editTask';

export default function addTaskHandler() {
  // new task - keyboard listener
  function handlerHelper(element) {
    // update localstorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
      description: element.value,
      completed: false,
      index: tasks.length
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //update ui
    populateList(newTask);
    element.value = '';

    // edit handler for new task
    addEditHandlers();
  }

  // input textarea listener
  const element = document.querySelector('#create-task-text');
  element.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') { handlerHelper(element) }
  });

  // new task button listener
  const formAddBtn = document.querySelector('#list-container > div > span');
  formAddBtn.addEventListener('click', (e) => { handlerHelper(e.target.previousElementSibling) });
}