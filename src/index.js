import Project from './projects';
import './style/style.css';

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
let priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

const projects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

function handleClick() {
  const project = Project(title.value, description.value, date.value,
    priority.checked ? priority = true : priority = false, notes.value);

  projects.push(project);
  
  localStorage.setItem('projects', JSON.stringify(projects));



}

function clearLocalStore() {
  localStorage.clear();
  console.log(localStorage);
}

submit.addEventListener('click', handleClick);
clear.addEventListener('click', clearLocalStore);

projects.forEach((item) => {
  console.log(item);
  const titleDisplay = document.createElement('h2');
  const descDisplay = document.createElement('p');
  const dateDisplay = document.createElement('p');
  const prioDisplay = document.createElement('p');
  const noteDisplay = document.createElement('p');

  titleDisplay.innerHTML = item.title;
  descDisplay.innerHTML = item.description;
  dateDisplay.innerHTML = item.dueDate;
  prioDisplay.innerHTML = item.priority;
  noteDisplay.innerHTML = item.notes;

  display.appendChild(titleDisplay);
  display.appendChild(descDisplay);
  display.appendChild(dateDisplay);
  display.appendChild(prioDisplay);
  display.appendChild(noteDisplay);
});
