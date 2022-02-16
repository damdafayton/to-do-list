import vertBtnSvg from '../icons/vert.svg';
import { textAreaChangeHandler, textAreaKeyStrokeHander } from './editTask';
import { checkBoxHandler, liCheckedToggle } from './checkBoxControl';

// populate ul element on page load or new task added
export default function populateList(task) {
  // console.log('populating');
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
  textArea.addEventListener('keydown', textAreaKeyStrokeHander);

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

  const ul = document.querySelector('#list-container ul');
  ul.appendChild(li);

  // styling for checked tasks
  checkBox.addEventListener('change', (e) => checkBoxHandler(e.target));
  if (checkBox.checked) { liCheckedToggle(checkBox); }
}