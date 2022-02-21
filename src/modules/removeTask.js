export default function removeHandler() {
  // Remove from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => task.completed === false);
  // update index
  tasks.forEach((task, index) => { task.index = index; });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Remove from ui
  const checkBoxes = document.querySelectorAll('#list-container li > input[type=checkbox]');
  checkBoxes.forEach((box) => {
    if (box.checked) { box.parentElement.remove(); }
  });
}