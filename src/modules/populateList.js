import vertBtnSvg from '../icons/vert.svg';
import { textAreaChangeHandler } from './editTask';

const listContainer = document.querySelector('#list-container');
const ul = listContainer.querySelector('ul');

function liCheckedToggle(checkBox) {
  checkBox.parentElement.classList.toggle('checked');
}

function updateLocalStorage(completeStatus, checkBox) {
  // find task location
  const checkBoxes = ul.querySelectorAll('li > input[type=checkbox]');
  let index = 0;
  checkBoxes.forEach((el, i) => {
    if (el === checkBox) {
      index = i;
    }
  });
  // find task within localstorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    console.log(index);
    if (task.index === index) {
      task.completed = completeStatus;
      console.log(task);
    }
  });
  // update localstorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function checkBoxHandler(checkBox) {
  liCheckedToggle(checkBox); // update style
  if (checkBox.checked) {
    updateLocalStorage(true, checkBox);
  } else {
    updateLocalStorage(false, checkBox);
  }
}

// populate task list
export default function populateList(task) {
  console.log('populating');
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'py-0', 'pe-2');

  const p = document.createElement('p');
  p.innerText = task.description;
  p.classList.add('px-3', 'py-3', 'mb-0', 'w-100');

  const textArea = document.createElement('input');
  textArea.type = 'textarea';
  textArea.classList.add('text-edit', 'd-none', 'w-100');
  textArea.value = task.description;
  textArea.addEventListener('change', textAreaChangeHandler);

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = task.completed;
  checkBox.classList.add('form-check-input');

  const vertBtn = document.createElement('div');
  vertBtn.innerHTML = vertBtnSvg;
  vertBtn.classList.add('ms-auto');

  li.appendChild(checkBox);
  li.appendChild(p);
  li.appendChild(textArea);
  li.appendChild(vertBtn);
  ul.appendChild(li);

  // styling for completed elements
  checkBox.addEventListener('change', (e) => checkBoxHandler(e.target));
  if (checkBox.checked) { liCheckedToggle(checkBox); }
}