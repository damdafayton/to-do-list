import populateList from './populateList';

export default function addTaskHandler(element) {
  // update localstorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = {
    description: element.value,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // update ui
  populateList(newTask);
  element.value = '';
}