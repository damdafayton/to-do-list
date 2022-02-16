export function liCheckedToggle(checkBox) {
  checkBox.parentElement.classList.toggle('checked');
}

function updateLocalStorage(completeStatus, checkBox) {
  // find task location
  const checkBoxes = document.querySelectorAll('#list-container li > input[type=checkbox]');
  let index = 0;
  checkBoxes.forEach((el, i) => {
    if (el === checkBox) {
      index = i;
    }
  });
  // find task within localstorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    // console.log(index);
    if (task.index === index) {
      task.completed = completeStatus;
      // console.log(task);
    }
  });
  // update localstorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function checkBoxHandler(checkBox) {
  liCheckedToggle(checkBox); // update style
  if (checkBox.checked) {
    updateLocalStorage(true, checkBox);
  } else {
    updateLocalStorage(false, checkBox);
  }
}