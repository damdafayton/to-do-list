import vertBtnSvg from '../icons/vertical.svg';
import { textAreaChangeHandler, textAreaEnterKeyHandler } from './editTask';
import { checkBoxHandler, liCheckedToggle } from './updateCheckBox';

// populate ul element on page load or new task added
export default function populateList(task) {
  // console.log(vertBtnSvg)
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'py-0', 'pe-2');

  const p = document.createElement('p');
  p.innerHTML = task.description;
  p.classList.add('px-3', 'py-3', 'mb-0', 'w-100');

  const textArea = document.createElement('input');
  textArea.type = 'textarea';
  textArea.classList.add('text-edit', 'd-none', 'w-100');
  textArea.value = task.description;
  textArea.addEventListener('change', textAreaChangeHandler);
  textArea.addEventListener('keydown', textAreaEnterKeyHandler);

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
  // console.log(li.innerHTML)
  ul.appendChild(li);
  // console.log(ul.innerHTML)
  // styling for checked tasks
  checkBox.addEventListener('change', checkBoxHandler);
  if (checkBox.checked) { liCheckedToggle(checkBox); }
}