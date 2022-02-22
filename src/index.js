// import _ from 'lodash';
import './style.scss';
import populateList from './modules/populateList';
import removeHandler from './modules/removeTask';
import addTaskHandler from './modules/addTask';
import { editTaskListenersForStyle } from './modules/editTask';

// Populate UI on page load
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach((task) => populateList(task));

editTaskListenersForStyle();

const removeSelectedDiv = document.querySelector('#remove-selected');
removeSelectedDiv.addEventListener('click', removeHandler);

// Prevent bad ui during load
window.addEventListener('load', () => {
  const list = document.querySelector('#list-container');
  console.log('dom loaded');
  list.classList.remove('d-none');
});

// Add create and edit listeners
window.addEventListener('DOMContentLoaded', () => {
  // input textarea listener to add task
  const element = document.querySelector('#create-task-text');
  element.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      addTaskHandler(element)
      // edit handler for new task
      addEditHandlers();
    }
  });

  // new task button listener to add task
  const formAddBtn = document.querySelector('#list-container > div > span');
  formAddBtn.addEventListener('click', (e) => {
    addTaskHandler(e.target.previousElementSibling)
    // edit handler for new task
    addEditHandlers();
  });
});
