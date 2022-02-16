// import _ from 'lodash';
import './style.scss';
import populateList from './modules/populateList';
import './modules/removeTask';
import addTaskHandler from './modules/addTask';
import { addEditHandlers } from './modules/editTask';

// populate UI on page load
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach((task) => populateList(task));
addEditHandlers();

// create task handler
window.addEventListener('DOMContentLoaded', addTaskHandler);

// prevent bad ui during load
window.addEventListener('load', () => {
  const list = document.querySelector('#list-container');
  console.log('dom loaded');
  list.classList.remove('d-none');
});