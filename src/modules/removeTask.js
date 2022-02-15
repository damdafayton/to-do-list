const clearDiv = document.querySelector('#clear-div');
clearDiv.addEventListener('click', () => {
  // remove from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => task.completed === false);
  // update index
  tasks.forEach((task, index) => { task.index = index; });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // remove from ui
  const checkBoxes = document.querySelectorAll('#list-container li > input[type=checkbox]');
  checkBoxes.forEach((box) => {
    if (box.checked) { box.parentElement.remove(); }
  });
});