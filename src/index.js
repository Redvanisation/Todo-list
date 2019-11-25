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

function showProjectsList() {
  projects.forEach((item) => {

    const divProject = `
      <h2> ${item.title} </h2>
      <p>Description: ${item.description} </p>
      <p>Due Date: ${item.dueDate} </p>
      <p>Priority: ${item.priority} </p>
      <p>Notes: ${item.notes} </p>
    `;

    const auxDiv = document.createElement('div');

    auxDiv.innerHTML = divProject;
    display.appendChild(auxDiv);
  });
}

function handleClick() {
  const project = Project(title.value, description.value, date.value,
    priority.checked ? priority = true : priority = false, notes.value);

  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  showProjectsList();
}

function clearLocalStore() {
  localStorage.clear();
  showProjectsList();
  console.log(localStorage);
}

submit.addEventListener('click', handleClick);
clear.addEventListener('click', clearLocalStore);

showProjectsList();
