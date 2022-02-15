// import _ from 'lodash';
import './style.scss';
import vertBtnSvg from './icons/vert.svg';

const tasks = [
  { description: 'task 1', completed: true, index: '0' },
  { description: 'task 2', completed: false, index: '1' },
  { description: 'task 3', completed: true, index: '2' },
];

const listContainer = document.querySelector('#list-container');
const ul = listContainer.querySelector('ul');

// populate to do list
function populateList(task) {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'align-items-center');

  const p = document.createElement('p');
  p.innerText = task.description;
  p.classList.add('mx-3', 'my-2');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = task.completed;
  checkBox.classList.add('form-check-input');

  const vertBtn = document.createElement('div');
  vertBtn.innerHTML = vertBtnSvg;
  vertBtn.classList.add('ms-auto');

  li.appendChild(checkBox);
  li.appendChild(p);
  li.appendChild(vertBtn);
  ul.appendChild(li);

  if (checkBox.checked) {
    li.classList.add('checked');
  }
}

tasks.forEach((task) => populateList(task));
