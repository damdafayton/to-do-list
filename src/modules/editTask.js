let editedElements = {};

export function addEditHandlers() {
  const pTags = document.querySelectorAll('#list-container p');
  console.log(pTags);
  pTags.forEach((tag) => {
    if (!tag.hasAttribute('listenerOnClick')) { // check if there ie already listener
      tag.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.classList.add('d-none');
        e.target.nextElementSibling.classList.remove('d-none');
        editedElements.target = e.target;
        editedElements.sibling = e.target.nextElementSibling;

        // add list element edit styling
        e.target.parentElement.classList.add('editing');
      });
    }
  });
}

// edit event outer click handler
document.addEventListener('click', (e) => {
  console.log(e.target === editedElements.sibling);
  console.log(e.target === editedElements.target);
  // console.log(editedElements)
  if (e.target !== editedElements.target && e.target !== editedElements.sibling
        && Object.keys(editedElements).length) {
    // remove list item styling
    editedElements.sibling.parentElement.classList.remove('editing');

    editedElements.target.classList.remove('d-none');
    editedElements.sibling.classList.add('d-none');
    editedElements = {};
  }
}, true);

export function textAreaChangeHandler(e) {
  const newText = e.target.value;
  console.log(newText);

  // find index of textarea
  const listElements = document.querySelectorAll('#list-container li');
  let index = 0;
  listElements.forEach((el, i) => {
    if (el === e.target.parentElement) {
      index = i;
    }
  });

  // update local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  Object.keys(tasks).forEach((key, i) => {
    if (i === index) {
      tasks[key].description = newText;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // update p element
  e.target.previousElementSibling.innerText = newText;
}

export function textAreaKeyStrokeHander(e) {
  if (e.code === 'Enter') {
    e.target.blur(); // remove focus
    e.target.parentElement.classList.remove('editing'); // remove edit styling
  }
}